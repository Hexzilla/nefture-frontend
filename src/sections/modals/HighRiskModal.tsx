import { Box, Stack, Typography } from '@mui/material';
import { DM_Mono } from '@next/font/google';
import React, { useState } from 'react';

import Description from '@components/wallet/Description';
import WalletAddress from '@components/wallet/WalletAddress';
import RisksCollapse from '@components/risks/RisksCollapse';
import StatusLabel from '@components/wallet/StatusLabel';

import { Transaction } from '@sections/dashboard/types';

import Modal from './Modal';
import WalletActions from './Actions';

type Props = {
  transaction: Transaction;
  onClose: VoidFunction;
};

const dmMono = DM_Mono({
  weight: '400',
  subsets: ['latin'],
});

export default function HighRiskModal({ transaction, onClose }: Props) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Modal
      title="High risk"
      wallet="Wallet1"
      actions={
        <WalletActions
          title="Reject (recommended)"
          swipe
          help={{ tooltip: 'High Risk', link: 'https://help.nefture.com' }}
          onSubmit={() => console.log('Reject')}
        />
      }
      onClose={onClose}
    >
      {!collapsed && (
        <>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing="14px"
            mt="34px"
          >
            <Typography>TOKEN NAME ID</Typography>

            <Box sx={{ width: '50%' }}>
              <WalletAddress address="0x8eEf26868D86B46494fAbe583fda2750c37a7638" />
            </Box>
            <Box sx={{ width: '58%' }}>
              <StatusLabel title="Probably a rug" variant="high" />
            </Box>
          </Stack>

          <Stack spacing="10px" my={3} className={dmMono.className}>
            <Description title="Deployed" description="10 Jun 2021 23:21:10 GMT" />
            <Description title="Chart" description="DexScreener" />
            <Description title="Creator wallet" description="Creator" />
          </Stack>
        </>
      )}

      <RisksCollapse
        risks={transaction.critical_risks}
        variant="high"
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />
    </Modal>
  );
}
