import { Box, Stack, Typography, Card } from '@mui/material';
import React from 'react';

type Props = {
  onClick: () => void;
};

export default function EmptyTransactions({ onClick }: Props) {
  return (
    <Card>
      <Stack
        direction="column"
        spacing={3}
        alignItems="center"
        onClick={onClick}
        mt={5}
        mb={5}
      >
        <Box
          component="img"
          src="/assets/images/dashboard/no_pending_transactions.png"
          sx={{ width: '147px', height: '147px', cursor: 'pointer' }}
        />
        <Typography>No pending transactions</Typography>
      </Stack>
    </Card>
  );
}
