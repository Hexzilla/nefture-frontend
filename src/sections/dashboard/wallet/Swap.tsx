import { Box, Stack, Typography } from '@mui/material';
import { DM_Mono } from '@next/font/google';

import CheckGreen from '@components/icons/CheckGreen';

import { Transaction } from '../types';
import Volumn from './Volumn';
import CriticalRisks from './CriticalRisks';
import DialogAction from './DialogAction';
import Modal from './Modal';
import Description from './Description';

type Props = {
  onClosed: VoidFunction;
  data: any | Transaction;
};

const dmMono = DM_Mono({
  weight: '400',
  subsets: ['latin'],
});

export default function SwapModal({ data, onClosed }: Props) {
  return (
    <Modal title="Swap" wallet="Wallet1" needHelp onClose={onClosed}>
      <Stack spacing={2} mt={2}>
        <Volumn title="Receiving" icon="plus" quantity="5260 USDC" volumn="$5,260.42" />
        <Volumn title="Paying" icon="minus" quantity="4260 USDT" volumn="$4,260.42" />
      </Stack>

      <Stack spacing={1} mt={3} className={dmMono.className}>
        <Description title="Protocal">
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography>Uniswap V2 router</Typography>
            <Box display="flex" alignItems="center" sx={{ cursor: 'pointer' }} onClick={onClosed}>
              <CheckGreen />
            </Box>
          </Stack>
        </Description>
        <Description title="Chain" description="Ethereum" />
        <Description title="Network Fee" description="0.0034 ETH ~$1.59" />
      </Stack>

      <CriticalRisks data={data} />

      <DialogAction />
    </Modal>
  );
}
