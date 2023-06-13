import React from 'react';
import { Box, Card, Chip, Stack, Typography } from '@mui/material';

import Ethereum from '@components/icons/Ethereum';
import CriticalChip from '@components/chips/CriticalChip';
import WarningChip from '@components/chips/WarningChip';

import NoPendingTransactions from './NoPendingTransactions';
import SecureClip from '@components/chips/SecureClip';

type Props = {
  isMobile?: boolean;
};

export default function TransactionCard({ isMobile }: Props) {
  const status = Math.random() * 10;

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
            <Typography color="grey">Received at 12:56</Typography>
            <Typography>1.05 ETH</Typography>
          </Stack>
        </Stack>

        {!isMobile && (
          <Stack direction="column" spacing={1}>
            <Typography color="grey">Status</Typography>
            <Typography>pending</Typography>
          </Stack>
        )}

        {status <= 3 ? <CriticalChip /> : status <= 5 ? <WarningChip /> : <SecureClip />}
      </Stack>
    </Card>
  );
}
