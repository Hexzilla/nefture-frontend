import React, { useState } from 'react';
import {
  Box,
  Card,
  Stack,
  Typography,
  Button,
  AccordionDetails,
  AccordionSummary,
  Accordion,
} from '@mui/material';
import Transaction from '@components/icons/Transaction';
import Close from '@components/icons/GrayClose';
import PlusBlue from '@components/icons/PlusBlue';
import Alert from '@components/icons/Alert';
import Help from '@components/icons/Help';
import Iconify from '@components/iconify';
import dynamic from 'next/dynamic';

const Swipezor = dynamic(() => import('./Swipezor.js'), {
  ssr: false,
});

type Props = {
  onClosed?: VoidFunction;
};

const warnings: String[] = new Array(3).fill(0).map((_, index) => 'test' as String);

const buttonSX = {
  width: '100%',
  backgroundColor: 'black',
  marginTop: '12px',
  '&:hover': {
    backgroundColor: '#2965FF',
  },
};

const accordionSX = {
  '&:before': {
    display: 'none',
  },
};

export default function WalletView({ onClosed }: Props) {
  const [reset, setReset] = useState(0);
  return (
    <Card sx={{ padding: '10px 20px' }}>
      <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between">
        <Stack direction="row" alignItems="center">
          <Transaction />
          <Typography>Medium Rist</Typography>
        </Stack>
        {/* <Stack direction="column" spacing={1}>
          <Typography>1/3</Typography>
        </Stack> */}
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography>Wallet1</Typography>
          <Box sx={{ cursor: 'pointer' }} onClick={onClosed}>
            <Close />
          </Box>
        </Stack>
      </Stack>
      <Typography mt={3} mb={1}>
        Receiving
      </Typography>
      <Card>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
          sx={{ padding: '10px 20px' }}
        >
          <Stack direction="row" spacing={3} alignItems="center">
            <PlusBlue />
            <Stack direction="column" spacing={1}>
              <Typography variant="h6">2 Tokens</Typography>
              <Typography color="grey">Value: $5775.9</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Card>
      <Accordion sx={accordionSX}>
        <AccordionSummary expandIcon={<Iconify icon="eva:arrow-ios-downward-fill" />}>
          {
            <Stack direction="row" spacing={3} justifyContent="space-between" alignItems="center">
              <Alert />
              <Typography sx={{ color: 'critical.main' }}>Critical Risks</Typography>
            </Stack>
          }
        </AccordionSummary>
        <AccordionDetails>
          {warnings.map((row, index) => (
            <Card sx={{ margin: '16px 30px' }} key={index}>
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
                sx={{ padding: '4px 4px' }}
              >
                <Stack direction="row" spacing={3} alignItems="center">
                  <Alert />
                  <Stack direction="column" spacing={1}>
                    <Typography>Danger</Typography>
                    <Typography color="grey">This is the danger first we flagged</Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Card>
          ))}
        </AccordionDetails>
      </Accordion>
      <Button href="/" size="large" variant="contained" sx={buttonSX}>
        Go to Home
      </Button>
      <Stack mt={3} mb={1}>
        <Swipezor
          mainText="Swipe to Approve"
          overlayText=""
          onSwipeDone={function () {
            console.log('Done!');
          }}
          reset={reset}
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
