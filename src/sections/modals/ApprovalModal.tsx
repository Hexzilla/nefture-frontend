import { Box, Card, Stack, Typography } from '@mui/material';

import Alert from '@components/icons/Alert';
import Scrollbar from '@components/scrollbar';
import WalletAddress from '@components/wallet/WalletAddress';
import StatusLabel from '@components/wallet/StatusLabel';

import { Transaction } from '@sections/dashboard/types';
import { Coin } from '@components/risks/types';

import CoinItem from './CoinItem';
import Modal from './Modal';
import ModalActions from './Actions';

type Props = {
  transaction: Transaction;
  onClose: VoidFunction;
};

export default function ApprovalModal({ transaction, onClose }: Props) {
  const height = items.length > 3 ? '200px' : 'auto';

  return (
    <Modal
      title="Approval"
      wallet="Wallet1"
      actions={
        <ModalActions
          title="Reject (recommended)"
          swipe
          help={{ tooltip: 'Swap', link: 'https://help.nefture.com' }}
          onSubmit={() => console.log('Reject')}
        />
      }
      onClose={onClose}
    >
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
          <StatusLabel title="High risk" variant="critical" />
        </Box>
      </Stack>

      <Typography mt={4} textAlign={'center'} fontSize={'18px'}>
        You are about to allow access to and
        <br />
        transfer all tokens from a collection
      </Typography>

      <Stack direction="row" spacing={3} m={3} alignItems={'center'}>
        <Box width={'24px'}>
          <Alert />
        </Box>
        <Typography color={'gray'}>
          This allows a third party to access and transfer the following tokens without further
          notice until you revoke it’s access.{' '}
        </Typography>
      </Stack>

      <Box sx={{ minHeight: '200px', position: 'relative' }}>
        {items.length > 0 && (
          <Card
            sx={{
              padding: '1em',
              backgroundColor: 'primary.buttonColor',
              position: 'absolute',
              bottom: '0',
              width: '100%',
              height: height,
            }}
          >
            <Scrollbar>
              {items.map((item, index) => (
                <CoinItem item={item} />
              ))}
            </Scrollbar>
          </Card>
        )}
      </Box>
    </Modal>
  );
}

const items: Coin[] = [
  {
    name: 'DAI',
    img: '/assets/icons/nefture/ic_coin_dai.svg',
    amount: 5,
  },
  {
    name: 'USDC',
    img: '/assets/icons/nefture/ic_coin_usdc.svg',
    amount: 5,
  },
  {
    name: 'USDT',
    img: '/assets/icons/nefture/ic_coin_usdt.svg',
    amount: 5,
  },
];
