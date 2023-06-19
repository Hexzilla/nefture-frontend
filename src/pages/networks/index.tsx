import { Box, Card, Container, Dialog, Divider, Stack, Typography } from '@mui/material';
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
import ComingCard from '@sections/networks/ComingCard';
import CopyWhite from '@components/icons/CopyWhite';
import InformationView from '@sections/networks/InformationView';
import Image from '@components/image/Image';
import Play from '@components/icons/Play';

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
                <NetworkCard type="ethereum" addWallet={setDialogOpen}/>
                <NetworkCard type="polygon" addWallet={setDialogOpen}/>
                <ComingCard />
              </>
            )}
          </Box>
        </Container>
      </AnimatedContainer>
      <Dialog fullWidth maxWidth="xs" open={dialogOpen}  onClose={() => setDialogOpen(false)}>
        <Stack>
          <Card sx={{ padding: '1em' }}>
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              justifyContent="space-between"
              mt={1}
              mb={3}
            >
              <Stack direction="column">
                <Typography>Ethereum</Typography>
                <Stack direction="row" spacing={2} justifyContent="space-between" mt={1}>
                  <Typography color="gray">https://rpc.nefture.com</Typography>
                  <CopyWhite />
                </Stack>
              </Stack>
              <EthereumIconRectangle />
            </Stack>
            <Divider />
            <Card sx={{ padding: '0.5em', textAlign: 'center', marginTop: '1em', borderRadius: 1 }}>
              <Typography>Copy URL and add manually</Typography>
            </Card>
            <Typography mt={2} mb={3}>
              Click on your network and then click on “Add Network”. Enter the following parameters:
            </Typography>
            <InformationView title="Network Name" value="Nefture RPC Mainnet" />
            <InformationView title="New RPC URL" value="Https://nefture.com" />
            <InformationView title="Chain ID" value="ETH" />
            <InformationView title="Currency Symbol" value="1" />
            <InformationView title="BlockExplorerURL" value="https://etherscan.io" />
            <Box sx={{ position: 'relative' }}>
              <Image src="/assets/images/network/video.png" mt={2} />
              <Box sx={{ position: 'absolute', top: '40%', left: '40%' }}>
                <Play />
              </Box>
            </Box>
          </Card>
        </Stack>
      </Dialog>
    </>
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
