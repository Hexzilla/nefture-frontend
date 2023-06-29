import { Box } from '@mui/material';
import React from 'react';

import { Transaction } from '@sections/dashboard/types';

import Modal from '../Modal';
import WalletActions from '../Actions';

import ContractScore from './ContractScore';

type Props = {
  transaction: Transaction;
  onClose: VoidFunction;
};

export default function ScoreModal({ transaction, onClose }: Props) {
  return (
    <Modal
      title="Smart Contract"
      wallet="Wallet1"
      showBackButton
      actions={
        <WalletActions
          title="Reject (recommended)"
          swipe
          help={{ tooltip: 'Smart Contract', link: 'https://help.nefture.com' }}
          onSubmit={() => console.log('Reject')}
        />
      }
      onClose={onClose}
    >
      <Box sx={{ padding: '32px 54px' }}>
        <ContractScore />
      </Box>
    </Modal>
  );
}
