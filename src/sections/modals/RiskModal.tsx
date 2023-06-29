import { Box, Stack } from '@mui/material';

import Description from '@components/wallet/Description';
import WalletAddress from '@components/wallet/WalletAddress';
import StatusLabel from '@components/wallet/StatusLabel';

import { RiskType } from '@components/risks/types';

import Modal from './Modal';
import ModalActions from './Actions';

type Props = {
  variant: RiskType;
  onClose: VoidFunction;
};

export default function RiskModal({ variant, onClose }: Props) {
  return (
    <Modal title={RiskNames[variant]} wallet="Wallet1" onClose={onClose}>
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
        <Description title="Deployed" description="10 Jun 2021 23:21:10 GMT" />
        <Description title="Chart" description="DexScreener" />
        <Description title="Creator wallet" description="Creator" />
      </Stack>

      <ModalActions title="Reject (recommended)" swipe onSubmit={() => console.log('Reject')} />
    </Modal>
  );
}

const RiskNames: Record<string, string> = {
  low: 'Low Risk',
  medium: 'Medium Risk',
  high: 'High Risk',
  danger: 'Danger',
};
