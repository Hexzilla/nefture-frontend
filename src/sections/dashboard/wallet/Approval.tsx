import { Box, Card, Stack, Typography } from '@mui/material';

import Alert from '@components/icons/Alert';
import { Transaction } from '../types';
import CoinItem from './CoinItem';
import Modal from './Modal';
import WalletActions from './WalletActions';
import WalletAddress from './WalletAddress';
import { Coin } from './labels/types';
import { maxHeight } from '@mui/system';
import Scrollbar from '@components/scrollbar';

type Props = {
  transaction: Transaction;
  onClose: VoidFunction;
};

export default function ApprovalModal({ transaction, onClose }: Props) {
  const COLORS = ['#FF4601', '#FFA800', '#2965FF', '#FF4601'];
  const BACKGROUNDS = ['#4A2828', '#4A3828', '#28344A', '#4A2828'];
  const texts = ['High risk', 'Medium risk', 'Low risk', 'Potential scam'];
  const height = (items.length>3)?'200px':'auto'

  return (
    <Modal title="Approval" wallet="Wallet1" needHelp onClose={onClose}>
      <WalletAddress
        sx={{ marginLeft: '9em', marginRight: '9em', padding: '0.2em 0.5em', marginTop: '3em' }}
      />
      <Stack
        sx={{
          borderRadius: '8px',
          backgroundColor: BACKGROUNDS[0],
          marginLeft: '9em',
          marginTop: '1em',
          marginRight: '9em',
          padding: '0.6em 0.5em',
          color: COLORS[0],
          textAlign: 'center',
        }}
      >
        <Typography>{texts[0]}</Typography>
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
              width:'100%',
              height: height
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
      <WalletActions title="Reject (recommended)" swipe onSubmit={() => console.log('Reject')} />
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
