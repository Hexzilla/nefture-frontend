import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

type Props = {
  onClick: () => void;
};

export default function EmptyTransactions({ onClick }: Props) {
  return (
    <Stack direction="column" spacing={3} alignItems="center" onClick={onClick} >
      <Box
        component="img"
        src="/assets/images/dashboard/no_pending_transactions.png"
        sx={{ width: '147px', height: '147px' }}
      />
      <Typography>No pending transactions</Typography>
    </Stack>
  );
}
