import { Box, Container, Typography } from '@mui/material';
import Head from 'next/head';
import { useEffect, useState } from 'react';

import AnimatedContainer from '@components/animated-container';
import { useSettingsContext } from '@components/settings';
import SkeletonNetworkItem from '@components/skeleton/SkeletonNetworkItem';
import DashboardLayout from '@layouts/dashboard';
import ComingCard from '@sections/networks/ComingCard';
import ManualDialog from '@sections/networks/ManualDialog';
import NetworkCard from '@sections/networks/NetworkCard';
import { TeamMember } from '@sections/team/TeamMembers';
import React from 'react';

export default function NetworksPage() {
  const { themeStretch } = useSettingsContext();
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    })();
  }, []);

  return (
    <>
      <AnimatedContainer>
        <Head>
          <title> Networks | Nefture</title>
        </Head>
        <Typography variant="h6" ml={3} pt={3}>
          Networks
        </Typography>
        <Typography color="#2965FF" ml={3} mb={3}>
          Have suggestions or feedback?
        </Typography>
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
                <NetworkCard
                  type="ethereum"
                  name="Ethereum"
                  rpcUrl="https://rpc.nefture.com"
                  addWallet={setDialogOpen}
                />
                <NetworkCard
                  type="polygon"
                  name="Polygon"
                  rpcUrl="https://polygon.nefture.com"
                  addWallet={setDialogOpen}
                />
                <ComingCard />
              </>
            )}
          </Box>
        </Container>
      </AnimatedContainer>
      <ManualDialog open={dialogOpen} onClose={() => setDialogOpen(false)}></ManualDialog>
    </>
  );
}

NetworksPage.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;
