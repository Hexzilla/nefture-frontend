import { Tab, Tabs, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

import SkeletonNetworkItem from '@components/skeleton/SkeletonNetworkItem';
import { Box } from '@mui/system';
import NotificationCard from '@sections/notification/NotificationCard';
import SettingsCard from '@sections/settings/SettingsEmailCard';
import SettingsSocialCard from '@sections/settings/SettingsSocialCard';
import SettingsEmailCard from '@sections/settings/SettingsEmailCard';

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
      <Typography variant="subtitle1" ml={1} mb={3}>
        {descriptions[tab]}
      </Typography>

      <Tabs value={tab} onChange={(_, value) => setTab(value)} sx={{ marginBottom: '20px' }}>
        <Tab value={0} label={'Notifications'} />
        <Tab value={1} label={'Settings'} />
      </Tabs>

      {tab === 0 && (
        <Box gap={3} display="grid" gridTemplateColumns={columnTemplates} pb="80px">
          {loading ? (
            <SkeletonNetworkItem key={1} />
          ) : (
            <>
              <NotificationCard title={'Smart Contract Analytics'} type={0} />
              <NotificationCard title={'Rug Pull Checker'} type={0} />
              <NotificationCard title={'Monthly Audit'} type={1} />
            </>
          )}
        </Box>
      )}

      {tab === 1 && (
        <Box gap={3} display="grid" gridTemplateColumns={columnTemplates} pb="80px">
          {loading ? (
            <SkeletonNetworkItem key={1} />
          ) : (
            <>
              <SettingsEmailCard title={'Telegram'} />
              <SettingsSocialCard title={'Smart Contract Analytics'} />
            </>
          )}
        </Box>
      )}
    </>
  );
}
