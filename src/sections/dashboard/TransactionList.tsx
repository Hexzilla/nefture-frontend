import React from 'react';
import { Box, Card, Chip, Stack, Typography } from '@mui/material';

import NoPendingTransactions from './NoPendingTransactions';
import SuspiciousTransactionCard from './SuspiciousTransactionCard';
import LatestTransactionCard from './LatestTransactionCard';

type Props = {
  title: string;
  onClicked?: VoidFunction;
  type: number; //1:suspicious transactionlist, 2: latest transaction list
};

export default function TransactionList({ title, onClicked, type }: Props) {
  return (
    <Box>
      <Stack direction="row" spacing={2} alignItems="center" sx={{ marginBottom: '20px' }}>
        <Typography variant="h6">{title}</Typography>
        <Chip label={1} size="small" />
      </Stack>

      <Stack direction="column" spacing="10px" sx={{cursor:'pointer'}}>
        {type==1&&new Array(4).fill(0).map((_, index) => (
          <SuspiciousTransactionCard key={index} status={index + 1}  onClicked={onClicked}/>
        ))}
        {type==2&&new Array(4).fill(0).map((_, index) => (
          <LatestTransactionCard key={index} status={index + 1}  onClicked={onClicked}/>
        ))}
      </Stack>

      <Typography variant="subtitle2" sx={{ paddingTop: '10px', color: '#7D7D7E' }}>
        See 5 more pending transactions...
      </Typography>

      {/* <NoPendingTransactions /> */}
    </Box>
  );
}
