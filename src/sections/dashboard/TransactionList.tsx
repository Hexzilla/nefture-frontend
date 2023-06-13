import React from 'react';
import { Box, Card, Chip, Stack, Typography } from '@mui/material';

import Ethereum from '@components/icons/Ethereum';
import Critical from '@components/icons/Critical';

import NoPendingTransactions from './NoPendingTransactions';

type Props = {
  title: string;
};

function TransactionCard() {
  return (
    <Card>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
        sx={{ padding: '10px 20px' }}
      >
        <Stack direction="row" spacing={3}>
          <div>
            <Ethereum />
          </div>

          <Stack direction="column" spacing={1}>
            <Typography>Received at 12:56</Typography>
            <Typography>1.05 ETH</Typography>
          </Stack>
        </Stack>

        <Stack direction="column" spacing={1}>
          <Typography>Status</Typography>
          <Typography>pending</Typography>
        </Stack>

        <Chip
          avatar={<Critical />}
          label={`critical`}
          sx={{ bgcolor: 'critical.main', padding: '8px', height: '40px' }}
        />
      </Stack>
    </Card>
  );
}

export default function TransactionList({ title }: Props) {
  return (
    <Box>
      <Stack direction="row" spacing={2} alignItems="center" sx={{ marginBottom: '20px' }}>
        <Typography variant="h6">{title}</Typography>
        <Chip label={1} size="small" />
      </Stack>

      <Stack direction="column" spacing="10px">
        {new Array(4).fill(0).map((_, index) => (
          <TransactionCard key={index} />
        ))}
      </Stack>

      <Typography variant="subtitle2" sx={{ paddingTop: '10px', color: '#7D7D7E' }}>
        See 5 more pending transactions...
      </Typography>

      <NoPendingTransactions />
    </Box>
  );
}
