import { Box, Stack, Typography } from '@mui/material';
import { DM_Mono } from '@next/font/google';
import React, { useState } from 'react';

import CheckGreen from '@components/icons/CheckGreen';
import RisksCollapse from '@components/risks/RisksCollapse';
import Description from '@components/wallet/Description';

import { Transaction } from '@sections/dashboard/types';

import Modal from './Modal';
import ModalActions from './Actions';
import Volumn from './Volumn';

type Props = {
  onClose: VoidFunction;
  transaction: Transaction;
};

const dmMono = DM_Mono({
  weight: '400',
  subsets: ['latin'],
});

export default function SwapModal({ transaction, onClose }: Props) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Modal
      title="Swap"
      wallet="Wallet1"
      actions={
        <ModalActions
          title="Go to Home"
          variant='main'
          swipe
          help={{ tooltip: 'Swap', link: 'https://help.nefture.com' }}
          onSubmit={() => console.log('GoToHome')}
        />
      }
      onClose={onClose}
    >
      {!collapsed && (
        <>
          <Stack spacing={2} mt={2}>
            <Volumn title="Receiving" icon="plus" quantity="5260 USDC" volumn="$5,260.42" />
            <Volumn title="Paying" icon="minus" quantity="4260 USDT" volumn="$4,260.42" />
          </Stack>

          <Stack spacing="10px" my={3} className={dmMono.className}>
            <Description title="Protocal">
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography>Uniswap V2 router</Typography>
                <Box
                  display="flex"
                  alignItems="center"
                  sx={{ cursor: 'pointer' }}
                  onClick={onClose}
                >
                  <CheckGreen />
                </Box>
              </Stack>
            </Description>
            <Description title="Chain" description="Ethereum" />
            <Description title="Network Fee" description="0.0034 ETH ~$1.59" />
          </Stack>
        </>
      )}

      <RisksCollapse
        risks={transaction.critical_risks}
        variant="medium"
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />
    </Modal>
  );
}
