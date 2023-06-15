import { Box, Chip, Stack, Typography } from '@mui/material';

import LatestTransactionCard from './LatestTransactionCard';
import SuspiciousTransactionCard from './SuspiciousTransactionCard';
import { TransactionItem } from './wallet/types';

type Props = {
  title: string;
  onClicked?: VoidFunction;
  type: number; //1:suspicious transactionlist, 2: latest transaction list
  transactions: TransactionItem[];
};

export default function TransactionList({ title, onClicked, type, transactions }: Props) {
  return (
    <Box>
      <Stack direction="row" spacing={2} alignItems="center" sx={{ marginBottom: '20px' }}>
        <Typography variant="h6">{title}</Typography>
        <Chip label={1} size="small" />
      </Stack>

      <Stack direction="column" spacing="10px" sx={{ cursor: 'pointer' }}>
        {type == 1 &&
          transactions.map((_, index) => (
            <SuspiciousTransactionCard
              key={index}
              status={index + 1}
              onClicked={onClicked}
              transactionItem={transactions[index]}
            />
          ))}
        {type == 2 &&
          transactions.map((_, index) => (
            <LatestTransactionCard
              key={index}
              status={index + 1}
              onClicked={onClicked}
              transactionItem={transactions[index]}
            />
          ))}
      </Stack>

      <Typography variant="subtitle2" sx={{ paddingTop: '10px', color: '#7D7D7E' }}>
        See 5 more pending transactions...
      </Typography>

      {/* <NoPendingTransactions /> */}
    </Box>
  );
}
