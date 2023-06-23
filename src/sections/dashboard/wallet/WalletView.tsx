import { Box, Button, Card, Collapse, Stack, Typography } from '@mui/material';
import dynamic from 'next/dynamic';
import { useState } from 'react';

import Alert from '@components/icons/Alert';
import CheckGreen from '@components/icons/CheckGreen';
import Down from '@components/icons/Down';
import Close from '@components/icons/GrayClose';
import Help from '@components/icons/Help';
import TransactionIcon from '@components/icons/Transaction';
import { DM_Mono } from '@next/font/google';
import { Risk, Transaction } from '../types';
import Volumn from './Volumn';
import CriticalRisks from './CriticalRisks';

const Swipezor = dynamic(() => import('./Swipezor'), {
  ssr: false,
});

type Props = {
  onClosed?: VoidFunction;
  data: any | Transaction;
};

const buttonSX = {
  width: '100%',
  backgroundColor: 'black',
  marginTop: '12px',
  '&:hover': {
    backgroundColor: '#2965FF',
  },
};

const dmMono = DM_Mono({
  weight: '400',
  subsets: ['latin'],
});

export default function WalletView({ onClosed, data }: Props) {
  const [display, setDisplay] = useState('flex');
  const [arrowVisible, setArrowVisible] = useState('visible');

  return (
    <Card sx={{ padding: '10px', minHeight: '90vh' }}>
      <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between">
        <Stack direction="row" alignItems="center" spacing={1} sx={{ marginLeft: '-10px' }}>
          <TransactionIcon />
          <Typography>Swap</Typography>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography>Wallet1</Typography>
          <Box sx={{ cursor: 'pointer' }} onClick={onClosed}>
            <Close />
          </Box>
        </Stack>
      </Stack>

      <Volumn display={display} data={data} type={'receiving'} />
      <Volumn display={display} data={data} type={'paying'} />

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

      <Stack mt={3} spacing={1}>
        <Button href="/" size="large" variant="contained" sx={buttonSX}>
          Go to Home
        </Button>

        <Swipezor
          mainText="Swipe to Approve"
          overlayText="Approved"
          onSwipeDone={function () {
            setArrowVisible('hidden');
          }}
          arrowVisible={arrowVisible}
        />
      </Stack>

      <Stack alignItems="center" sx={{ padding: '10px 20px', marginTop: '12px' }}>
        <Stack direction="row" spacing={2}>
          <Help />
          <Typography color="gray">Need Help?</Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
