import { Stack, Typography } from '@mui/material';
import { useMemo, useState } from 'react';

import { DM_Mono } from '@next/font/google';
import { Transaction } from '../types';
import Container from './Container';
import LatestTransaction from './LatestTransaction';

const SHOW_TRANSACTIONS = 4;

type Props = {
  onClick: (transaction: Transaction) => void;
  state: number;
  viewTransaction: VoidFunction;
};

const dmMono = DM_Mono({
  weight: '400',
  subsets: ['latin'],
});

export default function LatestTransactions({ onClick, state, viewTransaction }: Props) {
  const [transactions, setTransactions] = useState(mock_transactions);

  const items = useMemo(() => {
    return (transactions || []).slice(0, SHOW_TRANSACTIONS);
  }, [transactions]);

  return (
    <Container title="Latest Transactions" state={state} viewTransaction={viewTransaction}>
      <>
        <Stack direction="column" spacing="10px" sx={{ cursor: 'pointer' }}>
          {items.map((item, index) => (
            <LatestTransaction key={index} transaction={item} onClick={onClick} />
          ))}
        </Stack>

        <Typography
          variant="subtitle2"
          sx={{ paddingTop: '10px', color: '#7D7D7E' }}
          className={dmMono.className}
        >
          See 5 more pending transactions...
        </Typography>
      </>
    </Container>
  );
}

const mock_transactions: Transaction[] = [
  {
    status: 'pending',
    receiving: '2 tokens',
    value: '5779.9',
    state: 'critical',
    value_tx: '1.05 ETH',
    critical_risks: [
      {
        id: 1,
        description: 'description danger 1',
      },
      {
        id: 1,
        description: 'description danger 2',
      },
    ],
  },
  {
    status: 'pending',
    receiving: '1 token',
    value: '123.9',
    state: 'secure',
    value_tx: '1.05 ETH',
    critical_risks: [
      {
        id: 1,
        description: 'description danger 3',
      },
      {
        id: 2,
        description: 'description danger 4',
      },
    ],
  },
  {
    status: 'rejected',
    receiving: '1 token',
    value: '123.9',
    state: 'warning',
    value_tx: '1.05 ETH',
    critical_risks: [
      {
        id: 1,
        description: 'description danger 5',
      },
    ],
  },
  {
    status: 'rejected',
    receiving: '1 token',
    value: '123.9',
    state: 'warning',
    value_tx: '1.05 ETH',
    critical_risks: [
      {
        id: 1,
        description: 'description danger 5',
      },
    ],
  },
];
