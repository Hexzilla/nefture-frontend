import { useState, useMemo } from 'react';
import { Stack, Typography, Card, Box } from '@mui/material';

import { WalletStatus } from './types';
import EthereumIcon from '@components/icons/EthereumIcon';
import BlueCheck from '@components/icons/BlueCheck';
import ArrowCircleUp from '@components/icons/ArrowCircleUp';
import useResponsive from '@hooks/useResponsive';

const SHOW_TRANSACTIONS = 4;

type Props = {
};

export default function WalletItem({}: Props) {


  const styles = {
    '&:hover': {
      backgroundColor: 'rgba(145,158,171,0.08)',
    },
  };
  

  return (
    <Card sx={styles}>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="start"
        sx={{ padding: '10px 20px', cursor: 'pointer' }}
      >
          <EthereumIcon />
          <Typography>Received at 12:56</Typography>
          <Typography>0xebC73...8D0B2</Typography>
      </Stack>
    </Card>
  );
}