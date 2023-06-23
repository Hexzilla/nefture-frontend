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

type Props = {
  onClosed: VoidFunction;
  data: any | Transaction;
};

const dmMono = DM_Mono({
  weight: '400',
  subsets: ['latin'],
});

export default function WalletView({ data, onClosed }: Props) {
  const [display, setDisplay] = useState('flex');
  const [arrowVisible, setArrowVisible] = useState('visible');

  return (
    <Card sx={{ padding: '12px' }}>
      <DialogHeader title="Swap" walletName="Wallet1" onClose={onClosed} />

      <Volumn display={display} data={data} type={'Receiving'} />
      <Volumn display={display} data={data} type={'Paying'} />

      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
        mt={3}
        sx={{ display: display }}
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
        sx={{ display: display }}
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
        sx={{ display: display }}
        className={dmMono.className}
      >
        <Typography color="gray">Network Fee</Typography>
        <Typography>0.0034 ETH ~$1.59</Typography>
      </Stack>

      <CriticalRisks data={data} />

      <DialogAction />

      <Stack alignItems="center" sx={{ padding: '10px 20px', marginTop: '12px' }}>
        <Stack direction="row" spacing={2}>
          <Help />
          <Typography color="gray">Need Help?</Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
