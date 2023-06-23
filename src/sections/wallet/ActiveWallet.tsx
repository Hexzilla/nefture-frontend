import { useMemo, useState } from 'react';
import { Box, Card, Stack, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';

import Close from '@components/icons/GrayClose';
import PencilGray from '@components/icons/PencilGray';
import SvgColor from '@components/svg-color/SvgColor';
import { Wallet } from '@components/wallet';
import AlertItem from '@components/wallet/AlertItem';

import useCopyToClipboard from '@hooks/useCopyToClipboard';

import WalletLoader from './WalletLoader';
import ChangeWalletDialog from './ChangeWalletDialog';

type Props = {
  onClose: VoidFunction;
  activeWallet: Wallet;
};

export default function ActiveWallet({ onClose, activeWallet: wallet }: Props) {
  const { copy } = useCopyToClipboard();
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = useState(false);
  const [loadingWallet, setLoadingWallet] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const copyToClipboard = (content: string) => {
    copy(content);
    enqueueSnackbar('Copied!');
  };

  const walletAddress = useMemo(() => {
    const address = wallet.address;
    return address.substring(0, 7) + '...' + address.slice(address.length - 5);
  }, [wallet.address]);

  const setWalletName = (name: string) => {
    wallet.title = name;
  };

  return (
    <>
      <Box sx={{ cursor: 'pointer' }} onClick={onClose}>
        <Close />
      </Box>

      <Typography
        variant="h6"
        textAlign={'center'}
        onClick={() => setOpen(true)}
        sx={{ cursor: 'pointer' }}
      >
        {wallet.title} <PencilGray />
      </Typography>
      <Typography
        color={'gray'}
        textAlign={'center'}
        fontSize={'12px'}
        mb={2}
        sx={{ cursor: 'pointer' }}
        onClick={() => copyToClipboard(wallet.address)}
      >
        {walletAddress}
        <SvgColor
          src="/assets/icons/nefture/ic_copy.svg"
          sx={{ marginLeft: '2px', marginBottom: '-0.5em', width: '16px' }}
        />
        <SvgColor
          src="/assets/icons/nefture/ic_visit.svg"
          sx={{ marginBottom: '-0.5em', width: '16px' }}
        />
      </Typography>

      <WalletLoader onLoadingComplete={() => setLoadingWallet(false)} />

      <Card sx={{ marginTop: '2em', borderRadius: '8px' }}>
        <AlertItem title="Real-time Alert" type={1} />
      </Card>
      <Card sx={{ marginTop: '1em', marginBottom: '1em', borderRadius: '8px' }}>
        <AlertItem title="Monthly Alert" type={1} />
      </Card>

      {!!loadingWallet && (
        <Stack
          direction={'column'}
          sx={{
            backgroundColor: 'primary.main',
            marginTop: '24px',
            padding: '12px',
            borderRadius: '8px',
          }}
          mb={2}
        >
          <Typography fontSize={'15px'}>Activate Wallet Monitoring</Typography>
          <Typography fontSize={'14px'} mt={1}>
            Receive an alert when a threat is detected.
          </Typography>
        </Stack>
      )}
      <ChangeWalletDialog
        open={open}
        walletName={wallet.title}
        handleClose={handleClose}
        onChange={setWalletName}
      />
    </>
  );
}
