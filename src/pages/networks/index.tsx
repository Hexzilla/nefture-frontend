import Head from 'next/head';
import { Container, Stack, Box } from '@mui/material';

import DashboardLayout from '@layouts/dashboard';
import AnimatedContainer from '@components/animated-container';
import { useSettingsContext } from '@components/settings';
import TeamMembers, { TeamMember } from '@sections/team/TeamMembers';
import { SkeletonPostDetails, SkeletonPostItem, SkeletonProductDetails } from '@components/skeleton';
import SkeletonNetworkItem from '@components/skeleton/SkeletonNetworkItem';

export default function NetworksPage() {
  const { themeStretch } = useSettingsContext();

  return (
    <AnimatedContainer>
      <Head>
        <title> Networks | Nefture</title>
      </Head>
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Box
          gap={3}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          }}
        >
        <SkeletonNetworkItem key={1} />
          <SkeletonNetworkItem key={1} />
          <SkeletonNetworkItem key={1} />
        </Box>
      </Container>
    </AnimatedContainer>
  );
}

NetworksPage.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;

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
