import { useState } from 'react';
import * as Yup from 'yup';
import Head from 'next/head';
import { Container, Grid, Stack, Card, Typography, Box, Button, Tabs, 
  Tab, Dialog, DialogTitle, DialogActions, DialogContent } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useAuthContext } from '../auth/useAuthContext';
import DashboardLayout from '../layouts/dashboard';
import useResponsive from '../hooks/useResponsive';
import AnimatedContainer from '../components/animated-container';
import { useSettingsContext } from '../components/settings';

import TransactionList from '@sections/dashboard/TransactionList';
import Wallet from '@sections/dashboard/wallet/WalletView';
import MobileTransactionList from '@sections/dashboard/MobileTransactionList';

GeneralAppPage.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;

const DashboardDesktop = () => { 
  const [walletVisible, setWalletVisible] = useState(false);
  const displayWallet =()=>{
    setWalletVisible(true);
  }
  const hideWallet =()=>{
    setWalletVisible(false);
  }
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} lg={7}>
        <Stack direction="column" spacing={4}>
          <TransactionList type={1} title="Suspicious Transactions" onClicked={displayWallet}/>
          <TransactionList type={2} title="Latest Transactions" onClicked={displayWallet}/>
        </Stack>
      </Grid>

      <Grid item xs={12} lg={5}>
        {walletVisible &&<Wallet onClosed={hideWallet}/>}
      </Grid>
    </Grid>
  );
};

const DashboardMobile = () => {
  const [currentTab, setCurrentTab] = useState('suspicious');
  const [walletVisible, setWalletVisible] = useState(false);
  const displayWallet =()=>{
    setWalletVisible(true);
  }
  const hideWallet =()=>{
    setWalletVisible(false);
  }

  return (
    <>
      <Button variant="contained" size="large" sx={{ float: 'right' }}>
        Connect Wallet
      </Button><br/>
      
      <Typography variant="h3">Transactions</Typography>

      <Tabs value={currentTab} onChange={(event, newValue) => setCurrentTab(newValue)}>
        <Tab value={'suspicious'} label={'SUSPICIOUS'} />
        <Tab value={'transactions'} label={'LATEST TRANSACTIONS'} />
      </Tabs>
      {currentTab === 'suspicious' && <MobileTransactionList type={1} onClicked={displayWallet}/>}
      {currentTab === 'transactions' && <MobileTransactionList type={2} onClicked={displayWallet}/>}

      <Dialog fullWidth maxWidth="xs" open={walletVisible} >
        <Stack>
          <Wallet onClosed={hideWallet}/>
        </Stack>
      </Dialog>
      {/* <MobileMenu /> */}
    </>
  );
};

export default function GeneralAppPage() {
  const isMobile = useResponsive('down', 'sm');
  const { user } = useAuthContext();
  const { themeStretch } = useSettingsContext();

  return (
    <AnimatedContainer>
      <Head>
        <title> Dashboard | Nefture</title>
      </Head>
      <Container maxWidth={themeStretch ? false : 'xl'}>
        {isMobile ? <DashboardMobile /> : <DashboardDesktop />}
      </Container>
    </AnimatedContainer>
  );
}
