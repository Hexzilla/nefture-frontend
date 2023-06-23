import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import Head from 'next/head';
import { useState } from 'react';
import { m } from 'framer-motion';
import { useSnackbar } from 'notistack';

import { DialogAnimate, MotionContainer } from '@components/animate';
import AnimatedContainer from '@components/animated-container';
import PlusButton from '@components/icons/PlusButton';
import PlusIcon from '@components/icons/PlusWhite';
import { useSettingsContext } from '@components/settings';
import { Wallet, WalletProvider, useWalletContext } from '@components/wallet';
import DashboardLayout from '@layouts/dashboard';
import WalletList from '@sections/wallet/WalletList';
import useResponsive from '@hooks/useResponsive';
import ActiveWallet from '@sections/wallet/ActiveWallet';
import getVariant from '@sections/_examples/extra/animate/getVariant';

import useCopyToClipboard from '@hooks/useCopyToClipboard';
import AddWallet from '@sections/wallet/AddWallet';
import AddWalletButton from '@sections/wallet/AddWalletButton';
import WalletModal from '@sections/wallet/WalletModal';

export default function WalletPage() {
  const isMobile = useResponsive('down', 'sm');
  const { themeStretch } = useSettingsContext();
  const { modalType, openModal } = useWalletContext();
  const { enqueueSnackbar } = useSnackbar();
  const { copy } = useCopyToClipboard();
  const [lg, setLg] = useState(12);
  const [openWallet, setOpenWallet] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState(0);
  const [activeWallet, setActiveWallet] = useState(items[0]);

  const copyToClipboard = (content: string) => {
    enqueueSnackbar('Copied!');
    copy(content);
  };

  const handleAddWallet = () => {
    setLg(8);
    openModal('New');
  };

  const closeAddWallet = () => {
    setOpenWallet(false);
    setLoadingStatus(0);
    setLg(12);
  };

  const showSelectedWallet = (item: Wallet) => {
    setActiveWallet(item);
    setLoadingStatus(item.progress);
    setLg(8);
    setOpenWallet(true);
  };

  const updateStatus = () => {
    setLoadingStatus(loadingStatus + 1);
  };

  return (
    <AnimatedContainer>
      <Head>
        <title> Wallet | Nefture</title>
      </Head>
      <Grid container spacing={1}>
        <Grid item xs={12} lg={lg}>
          <Container maxWidth={themeStretch ? false : 'xl'}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" mt={3}>
              <Box>
                <Typography variant="h6">Wallets</Typography>
                <Typography fontSize={'12px'}>
                  Check your wallet security and protect your assets.
                </Typography>
              </Box>
              <AddWalletButton isMobile={isMobile} onClick={handleAddWallet} />
            </Stack>
            <WalletList alertVisibility={lg == 12 ? true : false} wallets={items} />
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

const items: Wallet[] = [
  {
    title: 'Cactus 1',
    status: 0,
    statusTitle: 'Check',
    value: 0,
    progress: 1,
  },
  {
    title: 'Cactus 2',
    status: 1,
    statusTitle: 'Severe',
    value: 97,
    progress: 5,
  },
  {
    title: 'Cactus 3',
    status: 2,
    statusTitle: 'Medium',
    value: 97,
    progress: 5,
  },
  {
    title: 'Cactus 4',
    status: 3,
    statusTitle: 'Very Good',
    value: 97,
    progress: 5,
  },
];
