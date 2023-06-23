import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import Head from 'next/head';
import { useState } from 'react';

import AnimatedContainer from '@components/animated-container';
import { useSettingsContext } from '@components/settings';
import { Wallet, WalletProvider, useWalletContext } from '@components/wallet';
import AddWalletButton from '@components/wallet/AddWalletButton';

import DashboardLayout from '@layouts/dashboard';
import useResponsive from '@hooks/useResponsive';

import WalletList from '@sections/wallet/WalletList';
import WalletModal from '@sections/wallet/WalletModal';

export default function WalletPage() {
  const isMobile = useResponsive('down', 'sm');
  const { themeStretch } = useSettingsContext();
  const { modalType, openModal } = useWalletContext();

  return (
    <AnimatedContainer>
      <Head>
        <title> Wallet | Nefture</title>
      </Head>
      <Grid container spacing={1}>
        <Grid item xs={12} lg={modalType ? 8 : 12}>
          <Container maxWidth={themeStretch ? false : 'xl'}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" mt={3}>
              <Box>
                <Typography variant="h6">Wallets</Typography>
                <Typography fontSize={'12px'}>
                  Check your wallet security and protect your assets.
                </Typography>
              </Box>
              <AddWalletButton isMobile={isMobile} onClick={() => openModal('New')} />
            </Stack>
            <WalletList wallets={items} />
          </Container>
        </Grid>

        <WalletModal isMobile={isMobile} visibility={!!modalType} />
      </Grid>
    </AnimatedContainer>
  );
}

WalletPage.getLayout = (page: React.ReactElement) => (
  <DashboardLayout>
    <WalletProvider>{page}</WalletProvider>
  </DashboardLayout>
);

const items: Wallet[] = [
  {
    title: 'Cactus 1',
    address: '0x8eEf868D86e583fd2750cfAb337a7626aB464948',
    status: 0,
    statusTitle: 'Check',
    value: 0,
    progress: 1,
  },
  {
    title: 'Cactus 2',
    address: '0x33022222f2783fc46494f37a786e5Ab38626868D',
    status: 1,
    statusTitle: 'Severe',
    value: 97,
    progress: 5,
  },
  {
    title: 'Cactus 3',
    address: '0x12345222f27786e5Ab38626868D883fc46494f37',
    status: 2,
    statusTitle: 'Medium',
    value: 97,
    progress: 5,
  },
  {
    title: 'Cactus 4',
    address: '0x1118eEf2783fdaB50c46494f37a7626868D86220',
    status: 3,
    statusTitle: 'Very Good',
    value: 97,
    progress: 5,
  },
];
