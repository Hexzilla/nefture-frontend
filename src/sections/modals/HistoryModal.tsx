import { Box, Button, Stack, Typography } from '@mui/material';

import TransactionIcon from '@components/icons/Transaction';
import { Transaction } from '@sections/dashboard/types';

import Modal from './Modal';

type Props = {
  transaction: Transaction;
  onClose: VoidFunction;
};

export default function HistoryModal({ transaction, onClose }: Props) {

  return (
    <Modal title="Transaction rejected" wallet="Wallet1" onClose={onClose}>
      <Box sx={{ minHeight: '250px', position: 'relative', marginTop: '200px' }}>
        <Stack>
          <Stack
            direction="row"
            spacing={2}
            alignItems={'center'}
            sx={{ margin: 'auto', width: 'auto' }}
          >
            <TransactionIcon />
            <Typography width={'auto'}>This transaction was flagged as High risk.</Typography>
          </Stack>
        </Stack>
      </Box>
      <Button
        size="large"
        variant="contained"
        sx={{
          borderRadius: '12px',
          bgcolor: 'primary.main',
          '&:hover': {
            bgcolor: 'primary.main',
          },
          width: '100%',
        }}
      >
        See on etherscan
      </Button>
      <Button
        size="large"
        variant="contained"
        sx={{
          borderRadius: '12px',
          bgcolor: 'common.black',
          '&:hover': {
            bgcolor: 'common.black',
          },
          width: '100%',
          marginTop: '1em',
        }}
      >
        Report transaction
      </Button>
    </Modal>
  );
}
