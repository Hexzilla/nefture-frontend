import Head from 'next/head';
import { Container, Stack } from '@mui/material';

import DashboardLayout from '@layouts/dashboard';
import AnimatedContainer from '@components/animated-container';
import { useSettingsContext } from '@components/settings';
import TeamMembers, { TeamMember } from '@sections/team/TeamMembers';

export default function TeamPage() {
  const { themeStretch } = useSettingsContext();

  return (
    <AnimatedContainer>
      <Head>
        <title> Team | Nefture</title>
      </Head>
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Stack spacing={3}>
          <TeamMembers teamMembers={teamMembers} />
        </Stack>
      </Container>
    </AnimatedContainer>
  );
}

TeamPage.getLayout = (page: React.ReactElement) => (
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