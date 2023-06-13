import React from 'react';
import { Box, Card, Chip, Stack, Typography,Container, Grid, Button } from '@mui/material';

import Ethereum from '@components/icons/Ethereum';
import CriticalChip from '@components/chips/CriticalChip';
import WarningChip from '@components/chips/WarningChip';

import SecureClip from '@components/chips/SecureClip';

import Transaction from '@components/icons/Transaction';
import Close from '@components/icons/GrayClose';
import PlusBlue from '@components/icons/PlusBlue';
import Alert from '@components/icons/Alert';
import Down from '@components/icons/Down';
import DoubleArrow from '@components/icons/DoubleArrow';
import Help from '@components/icons/Help';
import Lock from '@components/icons/Lock';

type Props = {
  onClosed?: VoidFunction;
};

const warnings: String[] = new Array(3).fill(0).map(
  (_, index) =>
    ("test" as String)
);

export default function WalletView({ onClosed }: Props) {
  return (
    <Card
      sx={{ padding: '10px 20px' }}>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack direction="row" alignItems="center">
          <Transaction/>
          <Typography>Medium Rist</Typography>
        </Stack>
        <Stack direction="column" spacing={1}>
          <Typography>1/3</Typography>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography>Wallet1</Typography>
          <Box sx={{cursor:'pointer'}} onClick = {onClosed}>
            <Close/>
          </Box>
        </Stack>
      </Stack>
      <Typography mt={3} mb={1}>Receiving</Typography>
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
      <Card sx={{marginTop:'24px'}}>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
          sx={{ padding: '10px 20px' }}
        >
          <Stack direction="row" spacing={3} justifyContent="space-between" alignItems="center">
              <Alert/>
              <Typography sx={{color:'critical.main'}}>Critical Risks</Typography>
          </Stack>
          <Down/>
        </Stack>
        {warnings.map((row, index) => (
          <Card sx={{margin:'16px 30px'}}>
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
      </Card>
      <Button href="/" size="large" variant="contained" 
        sx={{width:'100%', backgroundColor:'black', marginTop:'12px'}}>
        Go to Home
      </Button>
      <Card sx={{marginTop:'12px'}}>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
          sx={{ padding: '10px 20px' }}
        >
          <DoubleArrow />
          <Typography>Swipe to Approve</Typography>
          <Lock />
        </Stack>
      </Card>
      <Stack
        alignItems="center"
        sx={{ padding: '10px 20px', marginTop:"12px" }}
      >
        <Stack
          direction="row"
          spacing={2}>
          <Help />
          <Typography color="gray">Need Help?</Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
