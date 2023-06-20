import { Box, Card, Stack, Typography } from '@mui/material';

import StatusChip from '@components/chips/StatusChip';
import EthereumIcon from '@components/icons/EthereumIcon';
import useResponsive from '@hooks/useResponsive';

import { Transaction } from '../types';
import ArrowCircleUp from '@components/icons/ArrowCircleUp';

type Props = {
  transaction: Transaction;
  onClick: (value: Transaction) => void;
};

const cardSX = {
  '&:hover': {
    backgroundColor: 'rgba(145,158,171,0.08)',
  },
};
export default function SuspiciousTransaction({ transaction, onClick }: Props) {
  const isMobile = useResponsive('down', 'sm');

  return (
    <Card onClick={() => onClick(transaction)} sx={cardSX}>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
        sx={{ padding: '10px 20px', cursor: 'pointer' }}
      >
        <Stack direction="row" spacing={3}>
          <Box>
            <EthereumIcon />
            <Box sx={{ position: 'absolute', top: 0, left: 0 }}>
              <ArrowCircleUp />
            </Box>
          </Box>

          <Stack direction="column" spacing={1}>
            <Typography color="grey">Received at 12:56</Typography>
            <Typography>{transaction.value_tx}</Typography>
          </Stack>
        </Stack>

        {!isMobile && (
          <Stack direction="column" spacing={1}>
            <Typography color="grey">Status</Typography>
            <Typography>pending</Typography>
          </Stack>
        )}
        <StatusChip status={transaction.state} />
      </Stack>
    </Card>
  );
}
