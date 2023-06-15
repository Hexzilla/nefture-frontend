import React from 'react';
import { Box, Card, Chip, Stack, Typography } from '@mui/material';

import NoPendingTransactions from './NoPendingTransactions';
import SuspiciousTransactionCard from './SuspiciousTransactionCard';
import LatestTransactionCard from './LatestTransactionCard';

type Props = {
  onClicked?: VoidFunction;
  type: number;
};

export default function MobileTransactionList({ onClicked, type }: Props) {
  return (
    <Box sx={{ paddingTop: '24px'}}>
      <Stack direction="column" spacing="10px">
        {type==1&&new Array(8).fill(0).map((_, index) => (
          <SuspiciousTransactionCard key={index} status={index+1} isMobile onClicked={onClicked}/>
        ))}
        {type==2&&new Array(8).fill(0).map((_, index) => (
          <LatestTransactionCard key={index} status={index+1} isMobile onClicked={onClicked}/>
        ))}
      </Stack>
    </Box>
  );
}
