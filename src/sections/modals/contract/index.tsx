import { Box, Stack, Typography } from '@mui/material';

import { useModalContext } from '@components/modals';
import Description from '@components/wallet/Description';
import WalletAddress from '@components/wallet/WalletAddress';
import RisksCollapse from '@components/risks/RisksCollapse';
import StatusLabel from '@components/wallet/StatusLabel';

import { Transaction } from '@sections/dashboard/types';

import Modal from '../Modal';
import WalletActions from '../Actions';

import ContractScore from './ContractScore';

type Props = {
  transaction: Transaction;
  onClose: VoidFunction;
};

export default function SmartContractModal({ transaction, onClose }: Props) {
  const { page, setPage } = useModalContext();

  return (
    <Modal title="Smart Contract" wallet="Wallet1" needHelp onClose={onClose}>
      {page === 0 && (
        <>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing="14px"
            mt="34px"
            onClick={() => setPage(1)}
          >
            <Typography>TOKEN NAME (DTO)</Typography>

            <Box sx={{ width: '50%' }}>
              <WalletAddress address="0x8eEf26868D86B46494fAbe583fda2750c37a7638" />
            </Box>
            <Box sx={{ width: '58%' }}>
              <StatusLabel title="Definitely a rug" variant="critical" />
            </Box>
          </Stack>

          <Stack spacing="10px" my={3}>
            <Description title="Deployed" description="10 Jun 2021 23:21:10 GMT" />
            <Description title="Chart" description="DexScreener" />
            <Description title="Creator wallet" description="Creator" />
          </Stack>

          <RisksCollapse risks={transaction.critical_risks} variant="critical" />
        </>
      )}

      {page === 1 && (
        <Box padding="39px">
          <ContractScore />
        </Box>
      )}

      <WalletActions title="Reject (recommended)" swipe onSubmit={() => console.log('Reject')} />
    </Modal>
  );
}
