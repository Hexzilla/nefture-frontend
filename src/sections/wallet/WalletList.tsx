import { useState, useMemo } from 'react';
import { Stack, Typography, Container } from '@mui/material';

import WalletItem from './WalletItem';
import { WalletStatus } from './types';

const SHOW_TRANSACTIONS = 4;

type Props = {};

export default function WalletList({}: Props) {


  return (
    <Stack direction="column" spacing="10px" sx={{ cursor: 'pointer' }} mt={3}>
      {items.map((item, index) => (
        <WalletItem key={index} />
      ))}
    </Stack>
  );
}

const items: WalletStatus[] = [
  {
    title: 'title 1',
  },
  {
    title: 'title 2',
  },
  {
    title: 'title 3',
  },
  {
    title: 'title 4',
  },
];


