import Head from 'next/head';
import { Button, Chip, Container, Stack, Typography, Box } from '@mui/material';

import DashboardLayout from '@layouts/dashboard';
import AnimatedContainer from '@components/animated-container';
import { useSettingsContext } from '@components/settings';
import TeamMembers, { TeamMember } from '@sections/team/TeamMembers';
import PlusIcon from '@components/icons/PlusWhite';
import WalletList from '@sections/wallet/WalletList';

export default function WalletPage() {
  const { themeStretch } = useSettingsContext();

  return (
    <AnimatedContainer>
      <Head>
        <title> Wallet | Nefture</title>
      </Head>
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" mt={3}>
          <Box>
            <Typography variant="h6">Wallets</Typography>
            <Typography>Check your wallet security and protect your assets.</Typography>
          </Box>
          <Button variant="contained" size="large" startIcon={<PlusIcon />}>
            Add Wallet
          </Button>
        </Stack>
        <WalletList/>
      </Container>
    </AnimatedContainer>
  );
}

WalletPage.getLayout = (page: React.ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
);

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
