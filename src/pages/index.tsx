import { Container, Grid, Stack } from '@mui/material';
import Head from 'next/head';
import { useState } from 'react';

import { useAuthContext } from '../auth/useAuthContext';
import AnimatedContainer from '../components/animated-container';
import { useSettingsContext } from '../components/settings';
import useResponsive from '../hooks/useResponsive';
import DashboardLayout from '../layouts/dashboard';

import SuspiciousTransactions from '@sections/dashboard/transactions/SuspiciousTransactions';
import LatestTransactions from '@sections/dashboard/transactions/LatestTransactions';
import Wallet from '@sections/dashboard/wallet/WalletView';
import { Transaction } from '@sections/dashboard/types';

GeneralAppPage.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;

const Dashboard = () => {
  const [walletVisible, setWalletVisible] = useState(false);
  const [activeWallet, setActiveWallet] = useState({});

  const displayWallet = (value: Transaction) => {
    setWalletVisible(true);
    setActiveWallet(value);
  };

  const hideWallet = () => {
    setWalletVisible(false);
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} lg={7}>
        <Stack direction="column" spacing={4}>
          <SuspiciousTransactions onClick={displayWallet} />
          <LatestTransactions onClick={displayWallet} />
        </Stack>
      </Grid>
      <Grid item xs={12} lg={5}>
        {walletVisible && <Wallet onClosed={hideWallet} data={activeWallet} />}
      </Grid>
    </Grid>
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
        <Dashboard />
      </Container>
    </AnimatedContainer>
  );
}
