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
        <WalletItem key={index} item={item}/>
      ))}
    </Stack>
  );
}

const items: WalletStatus[] = [
  {
    title: 'title 1',
    status: 0,
    statusTitle:'Check',
    value: 0
  },
  {
    title: 'title 2',
    status: 1,
    statusTitle:'Severe',
    value: 97
  },
  {
    title: 'title 3',
    status: 2,
    statusTitle:'Medium',
    value: 97
  },
  {
    title: 'title 4',
    status: 3,
    statusTitle:'Very Good',
    value: 97
  },
];


