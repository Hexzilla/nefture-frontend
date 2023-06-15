import {
  Button,
  Container,
  Dialog,
  Grid,
  Stack,
  Tab,
  Tabs,
  Typography
} from '@mui/material';
import Head from 'next/head';
import { useState } from 'react';

import { useAuthContext } from '../auth/useAuthContext';
import AnimatedContainer from '../components/animated-container';
import { useSettingsContext } from '../components/settings';
import useResponsive from '../hooks/useResponsive';
import DashboardLayout from '../layouts/dashboard';

import MobileTransactionList from '@sections/dashboard/MobileTransactionList';
import TransactionList from '@sections/dashboard/TransactionList';
import Wallet from '@sections/dashboard/wallet/WalletView';
import { TransactionItem } from '@sections/dashboard/wallet/types';

GeneralAppPage.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;

const DashboardDesktop = () => {
  const [walletVisible, setWalletVisible] = useState(false);
  const displayWallet = () => {
    setWalletVisible(true);
  };
  const hideWallet = () => {
    setWalletVisible(false);
  };
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} lg={7}>
        <Stack direction="column" spacing={4}>
          <TransactionList
            type={1}
            title="Suspicious Transactions"
            onClicked={displayWallet}
            transactions={transactions}
          />
          <TransactionList
            type={2}
            title="Latest Transactions"
            onClicked={displayWallet}
            transactions={transactions}
          />
        </Stack>
      </Grid>

      <Grid item xs={12} lg={5}>
        {walletVisible && <Wallet onClosed={hideWallet} />}
      </Grid>
    </Grid>
  );
};

const DashboardMobile = () => {
  const [currentTab, setCurrentTab] = useState('suspicious');
  const [walletVisible, setWalletVisible] = useState(false);
  const displayWallet = () => {
    setWalletVisible(true);
  };
  const hideWallet = () => {
    setWalletVisible(false);
  };

  return (
    <>
      <Button variant="contained" size="large" sx={{ float: 'right' }}>
        Connect Wallet
      </Button>
      <br />

      <Typography variant="h3">Transactions</Typography>

      <Tabs value={currentTab} onChange={(event, newValue) => setCurrentTab(newValue)}>
        <Tab value={'suspicious'} label={'SUSPICIOUS'} />
        <Tab value={'transactions'} label={'LATEST TRANSACTIONS'} />
      </Tabs>
      {currentTab === 'suspicious' && (
        <MobileTransactionList type={1} onClicked={displayWallet} transactions={transactions} />
      )}
      {currentTab === 'transactions' && (
        <MobileTransactionList type={2} onClicked={displayWallet} transactions={transactions} />
      )}

      <Dialog fullWidth maxWidth="xs" open={walletVisible}>
        <Stack>
          <Wallet onClosed={hideWallet} />
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

const transactions: TransactionItem[] = [
  {
    status: 'pending',
    receiving: '2 tokens',
    value: '5779.9',
    state: 'critical',
    value_tx: '1.05 ETH',
    critical_risks: [
      {
        id_risk: 1,
        description: 'description danger',
      },
      {
        id_risk: 1,
        description: 'description danger',
      },
    ],
  },
  {
    status: 'pending',
    receiving: '1 token',
    value: '123.9',
    state: 'secure',
    value_tx: '1.05 ETH',
    critical_risks: [
      {
        id_risk: 1,
        description: 'description danger',
      },
      {
        id_risk: 2,
        description: 'description danger',
      },
    ],
  },
  {
    status: 'rejected',
    receiving: '1 token',
    value: '123.9',
    state: 'warning',
    value_tx: '1.05 ETH',
    critical_risks: [
      {
        id_risk: 1,
        description: 'description danger',
      },
      {
        id_risk: 2,
        description: 'description danger',
      },
    ],
  },
];
