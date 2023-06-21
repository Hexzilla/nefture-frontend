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

export default function WalletPage() {
  const { themeStretch } = useSettingsContext();
  const [lg, setLg] = useState(12);
  const [openWallet, setOpenWallet] = useState(false);
  const isMobile = useResponsive('down', 'sm');

  const addWallet = () => {
    setOpenWallet(true);
    setLg(8);
  };
  const closeAddWallet = () => {
    setOpenWallet(false);
    setLg(12);
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
            <WalletList alertVisibility={lg == 12 ? true : false} />
          </Container>
        </Grid>
        {(lg != 12 && !isMobile)&& (
          <Grid item xs={12} lg={12 - lg}>
            <AddWallet onClose={closeAddWallet} />
          </Grid>
        )}
        {isMobile && (
          <Dialog fullWidth maxWidth="xs" open={openWallet}>
            <Stack>
              <AddWallet onClose={closeAddWallet} />
            </Stack>
          </Dialog>
        )}
      </Grid>
    </AnimatedContainer>
  );
}

WalletPage.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;
