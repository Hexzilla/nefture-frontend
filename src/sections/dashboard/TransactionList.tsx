import React from 'react';
import { Box, Card, Chip, Stack, Typography } from '@mui/material';

import Ethereum from '@components/icons/Ethereum';
import Critical from '@components/icons/Critical';

type Props = {
  title: string;
};

function TransactionCard() {
  return (
    <Card>
      <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between" sx={{ padding: '10px 20px'}}>
        <Ethereum />

        <Stack direction="column" justifyContent="space-between">
          <Typography>Received at 12:56</Typography>
          <Typography>1.05 ETH</Typography>
        </Stack>

        <Stack direction="column" justifyContent="space-between">
          <Typography>Status</Typography>
          <Typography>pending</Typography>
        </Stack>

        <Chip avatar={<Critical />} label={`critical`} />
      </Stack>
    </Card>
  );
}

export default function TransactionList({ title }: Props) {
  return (
    <Box>
      <Stack direction="row" spacing={2} alignItems="center">
        {title}
      </Stack>

      <Stack direction="column" spacing={2}>
        {new Array(5).fill(0).map((_, index) => (
          <TransactionCard key={index} />
        ))}
      </Stack>
    </Box>
  );
}
