import { Box, Stack, Typography } from '@mui/material';
import { DM_Mono } from '@next/font/google';

import CheckGreen from '@components/icons/CheckGreen';

import { Transaction } from '../types';
import Volumn from './Volumn';
import CriticalRisks from './CriticalRisks';
import WalletActions from './WalletActions';
import Modal from './Modal';
import Description from './Description';

type Props = {
  onClose: VoidFunction;
  data: any | Transaction;
};

const dmMono = DM_Mono({
  weight: '400',
  subsets: ['latin'],
});

export default function HighRiskModal({ data, onClose }: Props) {
  return (
    <Modal title="Burn" wallet="Wallet1" needHelp onClose={onClose}>
      <Stack spacing={2} mt={2}>
        <Volumn title="Burning" icon="minus" quantity="2 Tokens" volumn="$5,260.42" />
      </Stack>

      <Stack spacing="10px" my={3} className={dmMono.className}>
        <Typography mb="8px">Destinataire</Typography>
        <Description title="Wallet" description="0x32455...7c9A3" />
        <Description title="Chain" description="Ethereum" />
        <Description title="Network Fee" description="0.0034 ETH ~$1.59" />
      </Stack>

      <CriticalRisks data={data} />

      <WalletActions title="Reject (recommended)" swipe onSubmit={() => console.log('Reject')} />
    </Modal>
  );
}
