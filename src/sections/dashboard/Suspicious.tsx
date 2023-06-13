import React from 'react';
import { Box, Card, Chip, Stack, Typography } from '@mui/material';

import NoPendingTransactions from './NoPendingTransactions';
import TransactionCard from './TransactionCard';

type Props = {
  onClicked?: VoidFunction;
};

export default function Suspicious({ onClicked }: Props) {
  return (
    <Box sx={{ paddingTop: '24px'}}>
      <Stack direction="column" spacing="10px">
        {new Array(10).fill(0).map((_, index) => (
          <TransactionCard key={index} status={index+1} isMobile onClicked={onClicked}/>
        ))}
      </Stack>
    </Box>
  );
}
