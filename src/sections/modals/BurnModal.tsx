import { Stack, Typography } from '@mui/material';

import RisksCollapse from '@components/risks/RisksCollapse';
import Description from '@components/wallet/Description';

import { Transaction } from '@sections/dashboard/types';

import Modal from './Modal';
import ModalActions from './Actions';
import Volumn from './Volumn';

type Props = {
  transaction: Transaction;
  onClose: VoidFunction;
};

export default function BurnModal({ transaction, onClose }: Props) {
  return (
    <Modal title="Burn" wallet="Wallet1" needHelp onClose={onClose}>
      <Stack spacing={2} mt={2}>
        <Volumn title="Burning" icon="minus" quantity="2 Tokens" volumn="$5,260.42" />
      </Stack>

      <Stack spacing="10px" my={3}>
        <Typography mb="8px">Destinataire</Typography>
        <Description title="Wallet" description="0x32455...7c9A3" />
        <Description title="Chain" description="Ethereum" />
        <Description title="Network Fee" description="0.0034 ETH ~$1.59" />
      </Stack>

      <RisksCollapse risks={transaction.critical_risks} variant="critical" />

      <ModalActions title="Reject (recommended)" swipe onSubmit={() => console.log('Reject')} />
    </Modal>
  );
}
