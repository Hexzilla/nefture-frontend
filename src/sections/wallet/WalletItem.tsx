import { useState, useMemo } from 'react';
import { Stack, Typography, Card, Box, CircularProgress, Switch } from '@mui/material';

import { WalletStatus } from './types';
import EthereumIcon from '@components/icons/EthereumIcon';
import Pencil from '@components/icons/Pencil';
import PencilGray from '@components/icons/PencilGray';
import { ChartDonut, ChartRadialBar } from '@sections/_examples/extra/chart';
import Help from '@components/icons/Help';
import HelpWhite from '@components/icons/HelpWhite';
import AlertItem from './AlertItem';

const SHOW_TRANSACTIONS = 4;

type Props = {
  item: WalletStatus;
};

export default function WalletItem({ item }: Props) {
  const styles = {
    '&:hover': {
      backgroundColor: 'rgba(145,158,171,0.08)',
    },
  };

  const circleStyle = {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'gray',
    borderRadius: '50%',
    height: '50px',
    backgroundColor: '#3f3f3f',
    position: 'relative',
  };
  const COLORS = ['error', 'warning', 'success'] as const;

  return (
    <Card sx={styles}>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
        sx={{ padding: '10px 20px', cursor: 'pointer' }}
      >
        <Stack direction="row" spacing={3} alignItems={'center'}>
          <EthereumIcon />
          <Typography>Received at 12:56</Typography>
          <PencilGray />
        </Stack>
        <Stack direction="row" spacing={3} alignItems={'center'}>
          <Typography>0xebC73...8D0B2</Typography>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          spacing={3}
          style={{ minWidth: '140px' }}
          alignItems={'center'}
        >
          {item.status == 0 && (
            <Card>
              <Typography m={1.5}>Launch Check</Typography>
            </Card>
          )}
          {item.status != 0 && (
            <>
              <Typography>{item.statusTitle}</Typography>
              <Box sx={circleStyle}>
                <CircularProgress
                  color={COLORS[item.status - 1]}
                  variant="determinate"
                  value={95}
                  size={48}
                />
                <Typography sx={{ position: 'absolute', top: '30%', left: '31%' }}>97</Typography>
              </Box>
            </>
          )}
        </Stack>
        <AlertItem title="Weekly Reports" />
        <AlertItem title="Real-time Alerts" />
        <Stack direction="row" spacing={3} alignItems={'center'}>
          <Card sx={{ borderColor: 'primary.main' }}>
            <Typography m={1.5}>Wallet 1</Typography>
          </Card>
        </Stack>
      </Stack>
    </Card>
  );
}
