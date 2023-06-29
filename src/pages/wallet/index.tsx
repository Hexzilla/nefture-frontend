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
  const isMobile = useResponsive('down', 'md');
  const { themeStretch } = useSettingsContext();
  const { wallets, modalType, openModal } = useWalletContext();
  console.log('modalType', modalType)

  return (
    <AnimatedContainer>
      <Head>
        <title> Wallet | Nefture</title>
      </Head>
      <Grid container spacing={1}>
        <Grid item xs={12} md={modalType ? 8 : 12}>
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

            <WalletList wallets={wallets} />
          </Container>
        </Grid>

        <WalletModal isMobile={isMobile} />
      </Grid>
    </AnimatedContainer>
  );
}

WalletPage.getLayout = (page: React.ReactElement) => (
  <DashboardLayout>
    <WalletProvider>{page}</WalletProvider>
  </DashboardLayout>
);
