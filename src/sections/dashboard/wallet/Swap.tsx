import { Box, Card, Stack, Typography } from '@mui/material';
import { DM_Mono } from '@next/font/google';
import { useState } from 'react';

import CheckGreen from '@components/icons/CheckGreen';
import Help from '@components/icons/Help';

import { Transaction } from '../types';

import Volumn from './Volumn';
import CriticalRisks from './CriticalRisks';
import DialogHeader from './DialogHeader';
import DialogAction from './DialogAction';
import Modal from './Modal';

type Props = {
  onClosed: VoidFunction;
  data: any | Transaction;
};

const dmMono = DM_Mono({
  weight: '400',
  subsets: ['latin'],
});

export default function SwapModal({ data, onClosed }: Props) {
  return (
    <Modal title="Swap" wallet="Wallet1" needHelp onClose={onClosed}>
      <Stack spacing={2} mt={2}>
        <Volumn title="Receiving" icon="plus" quantity="5260 USDC" volumn="$5,260.42" />
        <Volumn title="Paying" icon="minus" quantity="4260 USDT" volumn="$4,260.42" />
      </Stack>

      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
        mt={3}
        className={dmMono.className}
      >
        <Typography color="gray">Protocal</Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography>Uniswap V2 router</Typography>
          <Box display="flex" alignItems="center" sx={{ cursor: 'pointer' }} onClick={onClosed}>
            <CheckGreen />
          </Box>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
        mt={1}
        className={dmMono.className}
      >
        <Typography color="gray">Chain</Typography>
        <Typography>Ethereum</Typography>
      </Stack>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
        mt={1}
        mb={3}
        className={dmMono.className}
      >
        <Typography color="gray">Network Fee</Typography>
        <Typography>0.0034 ETH ~$1.59</Typography>
      </Stack>

      <CriticalRisks data={data} />

      <DialogAction />
    </Modal>
  );
}
