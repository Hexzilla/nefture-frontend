import { Container, Dialog, Grid, Stack } from '@mui/material';
import Head from 'next/head';
import { useEffect, useState } from 'react';

import AnimatedContainer from '../components/animated-container';
import { useSettingsContext } from '../components/settings';
import useResponsive from '../hooks/useResponsive';
import DashboardLayout from '../layouts/dashboard';

import LatestTransactions from '@sections/dashboard/transactions/LatestTransactions';
import SuspiciousTransactions from '@sections/dashboard/transactions/SuspiciousTransactions';
import { Transaction } from '@sections/dashboard/types';
import SkeletonWalletView from '@sections/dashboard/wallet/SkeletonWalletView';

import HistoryModal from '@sections/modals/HistoryModal';
import SwapModal from '@sections/modals/SwapModal';
import ApprovalModal from '@sections/modals/ApprovalModal';
import BurnModal from '@sections/modals/BurnModal';
import HighRiskModal from '@sections/modals/HighRiskModal';
import SmartContractModal from '@sections/modals/contract';
import ScoreModal from '@sections/modals/contract/ScoreModal';

GeneralAppPage.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;

const Dashboard = () => {
  const [walletVisible, setWalletVisible] = useState(false);
  const [activeWallet, setActiveWallet] = useState({} as any);
  const [state, setState] = useState(0);
  const isMobile = useResponsive('down', 'md');

  const displayWallet = (value: Transaction) => {
    setWalletVisible(!walletVisible);
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
    console.log('yes');
    setState(2);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={7}>
        <Stack direction="column" spacing={4}>
          <SuspiciousTransactions
            onClick={displayWallet}
            state={state}
            viewTransaction={viewTransactions}
          />
          <LatestTransactions
            onClick={displayWallet}
            state={state}
            viewTransaction={viewTransactions}
          />
        </Stack>
      </Grid>
      <Grid item xs={12} md={5}>
        {!isMobile && state == 0 && <SkeletonWalletView />}
        <Stack spacing={2}>
          {walletVisible && <SmartContractModal onClose={hideWallet} transaction={activeWallet} />}
          {walletVisible && <ScoreModal onClose={hideWallet} transaction={activeWallet} />}
          {walletVisible && <HighRiskModal onClose={hideWallet} transaction={activeWallet} />}
          {walletVisible && <BurnModal onClose={hideWallet} transaction={activeWallet} />}
          {walletVisible && <SwapModal onClose={hideWallet} transaction={activeWallet} />}
          {walletVisible && <ApprovalModal onClose={hideWallet} transaction={activeWallet} />}
          {walletVisible && <HistoryModal onClose={hideWallet} transaction={activeWallet} />}
        </Stack>

        {isMobile && (
          <Dialog fullWidth maxWidth="xs" open={walletVisible}>
            <Stack>
              <SwapModal onClose={hideWallet} transaction={activeWallet} />
            </Stack>
          </Dialog>
        )}
      </Grid>
    </Grid>
  );
};

export default function GeneralAppPage() {
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
