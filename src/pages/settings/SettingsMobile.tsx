import { Tab, Tabs, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

import SkeletonNetworkItem from '@components/skeleton/SkeletonNetworkItem';
import { Box } from '@mui/system';
import NotificationCard from '@sections/notification/NotificationCard';
import SettingsCard from '@sections/settings/SettingsCard';

export default function SettingsMobile() {
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState(1);

  const columnTemplates = {
    xs: 'repeat(1, 1fr)',
    sm: 'repeat(2, 1fr)',
    md: 'repeat(3, 1fr)',
  };

  const titles = ['Notifications', 'Settings'];
  const descriptions = [
    'Among the following notifications, choose the ones you want to receive by email.',
    'Manage your notification system. Want to see a new notification system?',
  ];

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    })();
  }, []);

  return (
    <>
      <Typography variant="h6" ml={1} pt={3}>
        {titles[tab]}
      </Typography>
      <Typography ml={1} mb={3}>
        {descriptions[tab]}
      </Typography>
      <Tabs value={tab} onChange={(event, newValue) => setTab(newValue)}>
        <Tab value={0} label={'Notifications'} />
        <Tab value={1} label={'Settings'} />
      </Tabs>
      {tab == 0 && (
        <Box gap={3} display="grid" gridTemplateColumns={columnTemplates}>
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
      )}
      {tab == 1 && (
        <Box gap={3} display="grid" gridTemplateColumns={columnTemplates}>
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
      )}
    </>
  );
}
