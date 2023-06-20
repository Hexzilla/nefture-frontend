import { Box, Button, Card, Collapse, Stack, Typography } from '@mui/material';
import dynamic from 'next/dynamic';
import { useState } from 'react';

import Alert from '@components/icons/Alert';
import CheckGreen from '@components/icons/CheckGreen';
import Down from '@components/icons/Down';
import Close from '@components/icons/GrayClose';
import Help from '@components/icons/Help';
import TransactionIcon from '@components/icons/Transaction';
import { DM_Mono } from 'next/font/google';
import { Risk, Transaction } from '../types';
import Volumn from './Volumn';

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
  const [open, setOpen] = useState(false);
  const [display, setDisplay] = useState('flex');
  const [arrowVisible, setArrowVisible] = useState('visible');
  const [rotate, setRotate] = useState('rotate(180deg)')

  const changeOpen = () => {
    setOpen(!open);
    if (display === 'flex') setDisplay('none');
    else setDisplay('flex');
    if(!open)
      setRotate('rotate(0deg)')
    else
      setRotate('rotate(180deg)')
  };

  return (
    <Card sx={{ padding: '10px 20px', minHeight: '90vh' }}>
      <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between">
        <Stack direction="row" alignItems="center">
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
          <Box sx={{ cursor: 'pointer' }} onClick={onClosed}>
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

      <Card>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
          sx={{ padding: '10px 20px', cursor: 'pointer' }}
          onClick={changeOpen}
        >
          <Stack direction="row" spacing={3} justifyContent="space-between" alignItems="center">
            <Alert />
            <Typography sx={{ color: 'critical.main' }}>Critical Risks</Typography>
          </Stack>
          <Box sx={{transform:rotate}}>
            <Down />
          </Box>
        </Stack>

        <Collapse in={open} unmountOnExit>
          {data.critical_risks &&
            data.critical_risks.map((item: Risk, index: number) => (
              <Card sx={{ margin: '16px 30px' }} key={index}>
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{ padding: '8px' }}
                >
                  <Stack direction="row" spacing={3} alignItems="center" sx={{ width: '100%' }}>
                    <Alert />
                    <Stack
                      direction="column"
                      spacing={1}
                      sx={{ width: `calc(100% - 48px)`, marginLeft: '12px!important' }}
                    >
                      <Typography>Danger</Typography>
                      <Typography color="grey" sx={{ overflowWrap: 'break-word' }}>
                        {data.critical_risks[index].description}
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </Card>
            ))}
        </Collapse>
      </Card>

      <Button href="/" size="large" variant="contained" sx={buttonSX}>
        Go to Home
      </Button>

      <Stack mt={3} mb={1}>
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
