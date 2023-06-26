import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';

import SkeletonNetworkItem from '@components/skeleton/SkeletonNetworkItem';
import { Box } from '@mui/system';
import NotificationCard from '@sections/notification/NotificationCard';
import SettingsEmailCard from '@sections/settings/SettingsEmailCard';
import SettingsSocialCard from '@sections/settings/SettingsSocialCard';

export default function SettingsDesktop() {
  const [loading, setLoading] = useState(true);

  const columnTemplates = {
    xs: 'repeat(1, 1fr)',
    sm: 'repeat(2, 1fr)',
    md: 'repeat(3, 1fr)',
  };

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
        Notifications
      </Typography>
      <Typography ml={1} mb={3}>
        Among the following notifications, choose the ones you want to receive by email.
      </Typography>
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
      <Typography variant="h6" ml={1} pt={3} sx={{ marginTop: '60px' }}>
        Settings
      </Typography>
      <Typography ml={1} mb={3}>
        Manage your notification system. Want to see a new notification system?
      </Typography>
      <Box gap={3} display="grid" gridTemplateColumns={columnTemplates} mb={1}>
        {loading ? (
          <>
            <SkeletonNetworkItem key={1} />
          </>
        ) : (
          <>
            <SettingsEmailCard title={'Email'} />
            <SettingsSocialCard title={'Telegram'} />
          </>
        )}
      </Box>
    </>
  );
}
