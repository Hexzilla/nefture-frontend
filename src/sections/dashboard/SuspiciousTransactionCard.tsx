import { Card, Stack, Typography } from '@mui/material';

import StatusChip from '@components/chips/StatusChip';
import EthereumIcon from '@components/icons/EthereumIcon';
import { TransactionItem } from './wallet/types';

type Props = {
  status: number;
  isMobile?: boolean;
  onClicked: (value: TransactionItem) => void;
  transactionItem: TransactionItem;
};

const cardSX = {
  '&:hover': {
    backgroundColor: 'rgba(145,158,171,0.08)',
  },
};

export default function SuspiciousTransactionCard({
  status,
  isMobile,
  onClicked,
  transactionItem,
}: Props) {
  return (
    <Card onClick={() => onClicked(transactionItem)} sx={cardSX}>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
        sx={{ padding: '10px 20px', cursor: 'pointer' }}
      >
        <Stack direction="row" spacing={3}>
          <div>
            <EthereumIcon />
          </div>

          <Stack direction="column" spacing={1}>
            <Typography color="grey">Received at 12:56</Typography>
            <Typography>{transactionItem.value_tx}</Typography>
          </Stack>
        </Stack>

        {!isMobile && (
          <Stack direction="column" spacing={1}>
            <Typography color="grey">Status</Typography>
            <Typography>pending</Typography>
          </Stack>
        )}
        <StatusChip status={transactionItem.state} />
      </Stack>
    </Card>
  );
}
