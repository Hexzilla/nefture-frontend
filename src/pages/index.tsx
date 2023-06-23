import { Container, Dialog, Grid, Stack } from '@mui/material';
import Head from 'next/head';
import { useState, useEffect } from 'react';

import { useAuthContext } from '../auth/useAuthContext';
import AnimatedContainer from '../components/animated-container';
import { useSettingsContext } from '../components/settings';
import useResponsive from '../hooks/useResponsive';
import DashboardLayout from '../layouts/dashboard';

import SuspiciousTransactions from '@sections/dashboard/transactions/SuspiciousTransactions';
import LatestTransactions from '@sections/dashboard/transactions/LatestTransactions';
import SwapModal from '@sections/dashboard/wallet/Swap';
import { Transaction } from '@sections/dashboard/types';
import SkeletonWalletView from '@sections/dashboard/wallet/SkeletonWalletView';

GeneralAppPage.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;

const Dashboard = () => {
  const [walletVisible, setWalletVisible] = useState(false);
  const [activeWallet, setActiveWallet] = useState({});
  const [state, setState] = useState(0);
  const isMobile = useResponsive('down', 'sm');

  const displayWallet = (value: Transaction) => {
    setWalletVisible(true);
    setActiveWallet(value);
  };

  const hideWallet = () => {
    setWalletVisible(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setState(1);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const viewTransactions = () => {
    console.log('yes')
    setState(2);
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} lg={7}>
        <Stack direction="column" spacing={4}>
          <SuspiciousTransactions onClick={displayWallet} state={state} viewTransaction={viewTransactions}/>
          <LatestTransactions onClick={displayWallet} state={state} viewTransaction={viewTransactions}/>
        </Stack>
      </Grid>
      <Grid item xs={12} lg={5}>
        {!isMobile && state == 0 && <SkeletonWalletView />}
        {walletVisible && <SwapModal onClosed={hideWallet} data={activeWallet} />}
        {isMobile && (
          <Dialog fullWidth maxWidth="xs" open={walletVisible}>
            <Stack>
              <SwapModal onClosed={hideWallet} data={activeWallet} />
            </Stack>
          </Dialog>
        )}
      </Grid>
    </Grid>
  );
};

export default function GeneralAppPage() {
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
