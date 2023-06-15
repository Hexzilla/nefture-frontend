import { Box, Stack } from '@mui/material';

import LatestTransactionCard from './LatestTransactionCard';
import SuspiciousTransactionCard from './SuspiciousTransactionCard';
import { TransactionItem } from './wallet/types';

type Props = {
  onClicked: (value: TransactionItem) => void;
  type: number;
  transactions: TransactionItem[];
};

export default function MobileTransactionList({ onClicked, type, transactions }: Props) {
  return (
    <Box sx={{ paddingTop: '24px' }}>
      <Stack direction="column" spacing="10px">
        {type == 1 &&
          transactions.map((_, index) => (
            <SuspiciousTransactionCard
              key={index}
              status={index + 1}
              isMobile
              onClicked={onClicked}
              transactionItem={transactions[index]}
            />
          ))}
        {type == 2 &&
          transactions.map((_, index) => (
            <LatestTransactionCard
              key={index}
              status={index + 1}
              isMobile
              onClicked={onClicked}
              transactionItem={transactions[index]}
            />
          ))}
      </Stack>
    </Box>
  );
}
