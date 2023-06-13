import { useState, useEffect } from 'react';
import { Typography, Stack } from '@mui/material';
// next
import { useRouter } from 'next/router';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
import WatchVideoButton from './WatchVideoButton';

// ----------------------------------------------------------------------

export default function HeaderInfo() {
  const { pathname } = useRouter();
  const [info, setInfo] = useState('');

  useEffect(() => {
    if (pathname === PATH_DASHBOARD.root) setInfo('Welcome, Luke! 👋');
    else if (pathname === PATH_DASHBOARD.productResearch) setInfo('Product research');
    else if (pathname === PATH_DASHBOARD.salesTracker) setInfo('Sales tracker');
    else if (pathname === PATH_DASHBOARD.myProducts.overview) setInfo('Overview');
    else if (pathname === PATH_DASHBOARD.myProducts.savedProducts) setInfo('Saved products');
    else if (pathname === PATH_DASHBOARD.myProducts.scheduled) setInfo('Scheduled');
    else if (pathname === PATH_DASHBOARD.myProducts.tested) setInfo('Tested');
    else if (pathname === PATH_DASHBOARD.team) setInfo('Team');
  }, [pathname]);

  return (
    <Stack direction="row" alignItems="center">
      <Typography variant="body1" fontWeight="medium" color="text.primary" mr={3}>
        {info}
      </Typography>
      {pathname !== PATH_DASHBOARD.root && <WatchVideoButton />}
    </Stack>
  );
}
