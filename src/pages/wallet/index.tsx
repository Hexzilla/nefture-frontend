import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import Head from 'next/head';
import { useState } from 'react';

import AnimatedContainer from '@components/animated-container';
import PlusIcon from '@components/icons/PlusWhite';
import { useSettingsContext } from '@components/settings';
import DashboardLayout from '@layouts/dashboard';
import { TeamMember } from '@sections/team/TeamMembers';
import AddWallet from '@sections/wallet/AddWallet';
import WalletList from '@sections/wallet/WalletList';

export default function WalletPage() {
  const { themeStretch } = useSettingsContext();
  const [lg, setLg] = useState(12);

  const addWallet = () => {
    setLg(9);
  };
  const closeAddWallet = () => {
    setLg(12)
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
                <Typography>Check your wallet security and protect your assets.</Typography>
              </Box>
              <Button variant="contained" size="large" startIcon={<PlusIcon />} onClick={addWallet}>
                Add Wallet
              </Button>
            </Stack>
            <WalletList alertVisibility={lg == 12 ? true : false} />
          </Container>
        </Grid>
        {lg != 12 && (
          <Grid item xs={12} lg={12 - lg}>
            <AddWallet onClose={closeAddWallet} />
          </Grid>
        )}
      </Grid>
    </AnimatedContainer>
  );
}

WalletPage.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;

const teamMembers: TeamMember[] = [
  {
    name: 'Luke Dalton',
    email: 'luke@Nefture.com',
    access: 'Owner',
  },
  {
    name: 'Eric Thomas',
    email: 'eric@Nefture.com',
    access: 'Admin',
  },
  {
    name: 'Pavlo John',
    email: 'pavlo@Nefture.com',
    access: 'Suspended',
  },
];
