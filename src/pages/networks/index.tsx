import { Box, Container, Divider, Typography } from '@mui/material';
import Head from 'next/head';
import { useState, useEffect } from 'react';

import AnimatedContainer from '@components/animated-container';
import { useSettingsContext } from '@components/settings';
import SkeletonNetworkItem from '@components/skeleton/SkeletonNetworkItem';
import DashboardLayout from '@layouts/dashboard';
import NetworkCard from '@sections/networks/NetworkCard';
import { TeamMember } from '@sections/team/TeamMembers';
import React from 'react';
import EthereumIconRectangle from '@components/icons/EthereumIconRectangle';
import Polygon from '@components/icons/Polygon';

export default function NetworksPage() {
  const { themeStretch } = useSettingsContext();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    })();
  }, []);

  return (
    <AnimatedContainer>
      <Head>
        <title> Networks | Nefture</title>
      </Head>
      <Typography variant='h6' ml={3}>Networks</Typography>
      <Typography color='#2965FF' ml={3} mb={3}>Have suggestions or feedback?</Typography>
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
          {loading ? (
            <>
              <SkeletonNetworkItem key={1} />
            </>
          ) : (
            <>
              <NetworkCard type='ethereum'/>
              <NetworkCard type='polygon'/>
            </>
          )}
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
