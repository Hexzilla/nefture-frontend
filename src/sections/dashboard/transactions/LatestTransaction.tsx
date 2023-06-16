import { Card, Stack, Typography, Box } from '@mui/material';

import EthereumIcon from '@components/icons/EthereumIcon';
import BlueCheck from '@components/icons/BlueCheck';
import ArrowCircleUp from '@components/icons/ArrowCircleUp';
import useResponsive from '@hooks/useResponsive';

import { Transaction } from '../types';

const styles = {
  '&:hover': {
    backgroundColor: 'rgba(145,158,171,0.08)',
  },
};

type Props = {
  transaction: Transaction;
  onClick: (value: Transaction) => void;
};

export default function LatestTransaction({ transaction, onClick }: Props) {
  const isMobile = useResponsive('down', 'sm');

  return (
    <Card sx={styles} onClick={() => onClick(transaction)}>
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
            <Typography>{transaction.status}</Typography>
          </Stack>
        )}
        <BlueCheck />
      </Stack>
    </Card>
  );
}
