import { useState, useEffect } from 'react';
import Head from 'next/head';
import { Container, Typography } from '@mui/material';

import DashboardLayout from '@layouts/dashboard';
import AnimatedContainer from '@components/animated-container';
import { useSettingsContext } from '@components/settings';

import SettingTabs from './SettingTabs';
import AccountTab from './AccountTab';
import BillingTab from './BillingTab';
import PlanTab from './PlanTab';
import { Box } from '@mui/system';
import SkeletonNetworkItem from '@components/skeleton/SkeletonNetworkItem';
import NotificationCard from '@sections/notification/NotificationCard';
import SettingsCard from '@sections/settings/SettingsCard';
// import ExtendTrialModal from './ExtendTrialModal';
// import CancellingReason from './CancellingReason';

export default function SettingspPage() {
  const [currentTab, setCurrentTab] = useState(0);
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
    <AnimatedContainer>
      <Head>
        <title> Settings | Nefture</title>
      </Head>
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Typography variant="h6" ml={1} pt={3}>
          Notifications
        </Typography>
        <Typography ml={1} mb={3}>
          Among the following notifications, choose the ones you want to receive by email.
        </Typography>
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
              <NotificationCard title={'Smart Contract Analytics'} type={0} />
              <NotificationCard title={'Rug Pull Checker'} type={0} />
              <NotificationCard title={'Monthly Audit'} type={1} />
            </>
          )}
        </Box>
        <Typography variant="h6" ml={1} pt={3}>
          Settings
        </Typography>
        <Typography ml={1} mb={3}>
          Manage your notification system. Want to see a new notification system?
        </Typography>
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
              <SettingsCard title={'Smart Contract Analytics'} type={0} />
              <SettingsCard title={'Telegram'} type={1} />
            </>
          )}
        </Box>
      </Container>
    </AnimatedContainer>
  );
}

SettingspPage.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;
