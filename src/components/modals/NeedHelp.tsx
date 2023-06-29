import { Box, Link, Stack, Tooltip, Typography } from '@mui/material';
import NextLink from 'next/link';
import React from 'react';

import Help from '@components/icons/Help';

type Props = {
  tooltip: string;
  link: string;
};

export default function NeedHelp({ tooltip, link }: Props) {
  return (
    <Stack alignItems="center" sx={{ paddingTop: '30px' }}>
      <Stack direction="row" spacing={2}>
        <Tooltip title={tooltip}>
          <Box sx={{ cursor: 'pointer' }}>
            <Help />
          </Box>
        </Tooltip>
        <Link
          component={NextLink}
          href={link}
          color="inherit"
          noWrap
          rel="noopener noreferrer"
          target="_blank"
        >
          <Typography color="gray">Need Help?</Typography>
        </Link>
      </Stack>
    </Stack>
  );
}
