import { Box, Button, Stack, Typography } from '@mui/material';

import TransactionIcon from '@components/icons/Transaction';
import { Transaction } from '@sections/dashboard/types';

import ModalActions from './Actions';
import Modal from './Modal';

type Props = {
  transaction: Transaction;
  onClose: VoidFunction;
};

export default function HistoryModal({ transaction, onClose }: Props) {
  return (
    <Modal
      title="Transaction rejected"
      wallet="Wallet1"
      actions={
        <ModalActions
          title="See on etherscan"
          variant="main"
          swipe
          help={{ tooltip: 'Swap', link: 'https://help.nefture.com' }}
          onSubmit={() => console.log('Reject')}
        />
      }
      onClose={onClose}
    >
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
    </Modal>
  );
}
