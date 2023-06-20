import { useState, useMemo } from 'react';
import { Stack, Typography } from '@mui/material';

import { Transaction } from '../types';
import Container from './Container';
import Suspicious from './Suspicious';

const SHOW_TRANSACTIONS = 4;

type Props = {
  onClick: (transaction: Transaction) => void;
  state: number;
  viewTransaction: VoidFunction;
};

export default function SuspiciousTransactions({ onClick, state, viewTransaction }: Props) {
  const [transactions, setTransactions] = useState(mock_transactions);

  const items = useMemo(() => {
    return (transactions || []).slice(0, SHOW_TRANSACTIONS);
  }, [transactions]);

  return (
    <Container title="Suspicious Transactions" state={state}  viewTransaction={viewTransaction}>
      <>
        <Stack direction="column" spacing="10px" sx={{ cursor: 'pointer' }}>
          {items.map((item, index) => (
            <Suspicious key={index} transaction={item} onClick={onClick} />
          ))}
        </Stack>

        <Typography variant="subtitle2" sx={{ paddingTop: '10px', color: '#7D7D7E' }}>
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
        id_risk: 1,
        description: 'description danger 1',
      },
      {
        id_risk: 1,
        description: 'description danger 2',
      },
    ],
  },
  {
    status: 'pending',
    receiving: '1 token',
    value: '444.9',
    state: 'secure',
    value_tx: '1.05 ETH',
    critical_risks: [
      {
        id_risk: 1,
        description: 'description danger 3',
      },
      {
        id_risk: 2,
        description: 'description danger 4',
      },
    ],
  },
  {
    status: 'rejected',
    receiving: '4 token',
    value: '123.9',
    state: 'warning',
    value_tx: '1.05 ETH',
    critical_risks: [
      {
        id_risk: 1,
        description: 'description danger 5',
      },
    ],
  },
  {
    status: 'rejected',
    receiving: '5 token',
    value: '222.9',
    state: 'warning',
    value_tx: '1.05 ETH',
    critical_risks: [
      {
        id_risk: 1,
        description: 'description danger 5',
      },
    ],
  },
];
