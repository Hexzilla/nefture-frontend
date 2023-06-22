import { Box, Button, Container, Dialog, Grid, Stack, Typography } from '@mui/material';
import Head from 'next/head';
import { useState } from 'react';

import AnimatedContainer from '@components/animated-container';
import PlusIcon from '@components/icons/PlusWhite';
import { useSettingsContext } from '@components/settings';
import DashboardLayout from '@layouts/dashboard';
import AddWallet from '@sections/wallet/AddWallet';
import WalletList from '@sections/wallet/WalletList';
import useResponsive from '@hooks/useResponsive';
import PlusButton from '@components/icons/PlusButton';
import getVariant from '@sections/_examples/extra/animate/getVariant';
import { DialogAnimate, MotionContainer } from '@components/animate';

import { m } from 'framer-motion';
import { WalletStatus } from '@sections/wallet/types';
import { useSnackbar } from 'notistack';
import useCopyToClipboard from '@hooks/useCopyToClipboard';

export default function WalletPage() {
  const { themeStretch } = useSettingsContext();
  const [lg, setLg] = useState(12);
  const [openWallet, setOpenWallet] = useState(false);
  const isMobile = useResponsive('down', 'sm');
  const [loadingStatus, setLoadingStatus] = useState(0);
  const { enqueueSnackbar } = useSnackbar();
  const { copy } = useCopyToClipboard();
  const [activeWallet, setActiveWallet] = useState(items[0])

  const copyToClipboard =(content:string)=>{
    enqueueSnackbar('Copied!');
    copy(content);
  }

  const addWallet = () => {
    setLg(8);
    if(isMobile)
      setOpenWallet(true);
    else
    {
      (async () => {
        setTimeout(() => {
          setOpenWallet(true);
        }, 500);
      })();
    }
  };
  const closeAddWallet = () => {
    setOpenWallet(false);
    setLoadingStatus(0);
    setLg(12);
  };

  const showSelectedWallet = (item:WalletStatus) => {
    setActiveWallet(item)
    setLoadingStatus(item.progress);
    addWallet();
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
              {!isMobile && (
                <Button
                  sx={{ '&:hover': { backgroundColor: 'primary.main' } }}
                  variant="contained"
                  size="large"
                  startIcon={<PlusIcon />}
                  onClick={addWallet}
                >
                  Add Wallet
                </Button>
              )}
              {isMobile && (
                <Box onClick={addWallet}>
                  <PlusButton />
                </Box>
              )}
            </Stack>
            <WalletList
              alertVisibility={lg == 12 ? true : false}
              onClick={showSelectedWallet}
              items={items}
              copyToClipboard = {copyToClipboard}
            />
          </Container>
        </Grid>
        {lg != 12 && !isMobile && openWallet && (
          <Grid item xs={12} lg={12 - lg}>
            <MotionContainer>
              <Box component={m.div} variants={getVariant('slideInRight')}>
                <AddWallet
                  onClose={closeAddWallet}
                  loadingStatus={loadingStatus}
                  updateLoading={updateStatus}
                  copyToClipboard = {copyToClipboard}
                  activeWallet = {activeWallet}
                />
              </Box>
            </MotionContainer>
          </Grid>
        )}
        {isMobile && (
          <DialogAnimate
            fullWidth
            maxWidth="xs"
            open={openWallet}
            variants={getVariant('bounceIn')}
          >
            <Stack>
              <AddWallet
                onClose={closeAddWallet}
                loadingStatus={loadingStatus}
                updateLoading={updateStatus}
                copyToClipboard={copyToClipboard}
                activeWallet = {activeWallet}
              />
            </Stack>
          </DialogAnimate>
        )}
      </Grid>
    </AnimatedContainer>
  );
}

WalletPage.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;

const items: WalletStatus[] = [
  {
    title: 'title 1',
    status: 0,
    statusTitle: 'Check',
    value: 0,
    progress: 1,
  },
  {
    title: 'title 2',
    status: 1,
    statusTitle: 'Severe',
    value: 97,
    progress: 5,
  },
  {
    title: 'title 3',
    status: 2,
    statusTitle: 'Medium',
    value: 97,
    progress: 5,
  },
  {
    title: 'title 4',
    status: 3,
    statusTitle: 'Very Good',
    value: 97,
    progress: 5,
  },
];
