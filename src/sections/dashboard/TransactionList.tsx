import React from 'react';
import { Box, Chip, Stack, Typography } from '@mui/material';

import Ethereum from '@components/icons/Ethereum';
import Critical from '@components/icons/Critical';

export default function TransactionList() {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Ethereum />

      <Stack direction="column" justifyContent="space-between">
        <Typography>Received at 12:56</Typography>
        <Typography>1.05 ETH</Typography>
      </Stack>

      <Stack direction="column" justifyContent="space-between">
        <Typography>Status</Typography>
        <Typography>pending</Typography>
      </Stack>

      <Chip
        avatar={<Critical />}
        label={`critical`}
      />
    </Stack>
  );
}
