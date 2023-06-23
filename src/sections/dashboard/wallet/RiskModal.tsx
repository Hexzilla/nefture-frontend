import { Box, Stack } from '@mui/material';

import Description from '@components/wallet/Description';
import WalletAddress from '@components/wallet/WalletAddress';
import StatusLabel from '@components/wallet/StatusLabel';

import Modal from './Modal';
import WalletActions from './WalletActions';

type Props = {
  variant: 'low' | 'medium' | 'high' | 'danger';
  onClose: VoidFunction;
};

export default function RiskModal({ variant, onClose }: Props) {
  return (
    <Modal title="Medium risk" wallet="Wallet1" needHelp onClose={onClose}>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing="14px"
        mt="34px"
      >
        <Box sx={{ width: '50%' }}>
          <WalletAddress address="0x8eEf26868D86B46494fAbe583fda2750c37a7638" />
        </Box>
        <Box sx={{ width: '58%' }}>
          <StatusLabel title="Probably a rug" variant={variant} />
        </Box>
      </Stack>

      <Stack spacing="10px" my={3}>
        <Description title="Chain" description="Ethereum" />
        <Description title="Network Fee" description="0.0034 ETH ~$1.59" />
      </Stack>

      <WalletActions title="Reject (recommended)" swipe onSubmit={() => console.log('Reject')} />
    </Modal>
  );
}
