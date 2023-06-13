import { useState } from 'react';
import * as Yup from 'yup';
import Head from 'next/head';
import { Container, Grid, Stack, Card, Typography, Box, Button, Tabs, Tab } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useAuthContext } from '../auth/useAuthContext';
import DashboardLayout from '../layouts/dashboard';
import useResponsive from '../hooks/useResponsive';
import AnimatedContainer from '../components/animated-container';
import { useSettingsContext } from '../components/settings';

import TransactionList from '@sections/dashboard/TransactionList';
import Wallet from '@sections/dashboard/wallet/WalletView';
import Suspicious from '@sections/dashboard/Suspicious';

GeneralAppPage.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;

type FormValuesProps = {
  storeName: string;
  afterSubmit?: string;
};

const DashboardDesktop = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} lg={7}>
        <Stack direction="column" spacing={4}>
          <TransactionList title="Suspicious Transactions" />
          <TransactionList title="Latest Transactions" />
        </Stack>
      </Grid>

      <Grid item xs={12} lg={5}>
        <TransactionList title="Latest Transactions" />
      </Grid>
    </Grid>
  );
};

const DashboardMobile = () => {
  const [currentTab, setCurrentTab] = useState('suspicious');

  return (
    <>
      <Typography variant="h3">Transactions</Typography>

      <Tabs value={currentTab} onChange={(event, newValue) => setCurrentTab(newValue)}>
        <Tab value={'suspicious'} label={'SUSPICIOUS'} />
        <Tab value={'transactions'} label={'LATEST TRANSACTIONS'} />
      </Tabs>

      {currentTab === 'suspicious' && <Suspicious />}
      {currentTab === 'transactions' && <Suspicious />}

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
        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            <Stack direction="column" spacing={4}>
              <TransactionList title="Suspicious Transactions" />
              <TransactionList title="Latest Transactions" />
            </Stack>
          </Grid>

          <Grid item xs={12} md={5} mt={3}>
            <Wallet/>
          </Grid>
        </Grid>
        {isMobile ? <DashboardMobile /> : <DashboardDesktop />}
      </Container>
    </AnimatedContainer>
  );
}
