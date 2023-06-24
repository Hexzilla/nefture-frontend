import { Box, Stack, Typography } from '@mui/material';
import { DM_Mono } from '@next/font/google';

import Description from '@components/wallet/Description';

import { Transaction } from '@sections/dashboard/types';
import CriticalRisks from '@sections/risks/CriticalRisks';

import Modal from './Modal';
import WalletActions from './Actions';
import Volumn from './Volumn';

type Props = {
  transaction: Transaction;
  onClose: VoidFunction;
};

const dmMono = DM_Mono({
  weight: '400',
  subsets: ['latin'],
});

export default function HighRiskModal({ transaction, onClose }: Props) {
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

      <CriticalRisks risks={transaction.critical_risks} />

      <WalletActions title="Reject (recommended)" swipe onSubmit={() => console.log('Reject')} />
    </Modal>
  );
}
