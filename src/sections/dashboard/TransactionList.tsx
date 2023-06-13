import React from 'react';
import { Box, Card, Chip, Stack, Typography } from '@mui/material';

import NoPendingTransactions from './NoPendingTransactions';
import TransactionCard from './TransactionCard';

type Props = {
  title: string;
  onClicked?: VoidFunction;
};

export default function TransactionList({ title, onClicked }: Props) {
  return (
    <Box onClick={onClicked} sx={{cursor:'pointer'}}>
      <Stack direction="row" spacing={2} alignItems="center" sx={{ marginBottom: '20px' }}>
        <Typography variant="h6">{title}</Typography>
        <Chip label={1} size="small" />
      </Stack>

      <Stack direction="column" spacing="10px">
        {new Array(4).fill(0).map((_, index) => (
          <TransactionCard key={index} status={index + 1} />
        ))}
      </Stack>

      <Typography variant="subtitle2" sx={{ paddingTop: '10px', color: '#7D7D7E' }}>
        See 5 more pending transactions...
      </Typography>

      {/* <NoPendingTransactions /> */}
    </Box>
  );
}
