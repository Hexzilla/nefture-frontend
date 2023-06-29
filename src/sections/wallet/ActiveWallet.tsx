import { Box, Stack, TextField, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';
import { useMemo, useState } from 'react';

import Close from '@components/icons/GrayClose';
import PencilGray from '@components/icons/PencilGray';
import SvgColor from '@components/svg-color/SvgColor';
import { Wallet, useWalletContext } from '@components/wallet';
import AlertSettings from '@components/wallet/AlertSettings';

import useCopyToClipboard from '@hooks/useCopyToClipboard';

import WalletLoader from './WalletLoader';

type Props = {
  wallet: Wallet;
  onClose: VoidFunction;
};

export default function ActiveWallet({ wallet, onClose }: Props) {
  const { copy } = useCopyToClipboard();
  const { setWalletName } = useWalletContext();
  const { enqueueSnackbar } = useSnackbar();
  const [loadingWallet, setLoadingWallet] = useState(true);
  const [edit, setEdit] = useState(false);

  const copyToClipboard = (content: string) => {
    copy(content);
    enqueueSnackbar('Copied!');
  };

  const walletAddress = useMemo(() => {
    const address = wallet.address;
    return address.substring(0, 7) + '...' + address.slice(address.length - 5);
  }, [wallet.address]);

  const handleWalletNameChanged = (name: string) => {
    if (wallet.id) {
      setWalletName(wallet.id, name);
    }
  };

  const handlePencilClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setEdit((value) => !value);
  };

  const handleKeyInput = (e: any) => {
    if (e.keyCode === 13) {
      setEdit(false);
    }
  };

  return (
    <>
      <Box sx={{ cursor: 'pointer' }} onClick={onClose}>
        <Close />
      </Box>

      <Typography variant="h6" textAlign={'center'} sx={{ cursor: 'pointer' }}>
        <span style={{ display: edit ? 'none' : '' }}>{wallet.title}</span>
        <TextField
          value={wallet.title}
          sx={{
            maxWidth: '196px',
            display: edit ? '' : 'none',
            marginTop: '-8px',
          }}
          onKeyDown={handleKeyInput}
          onChange={(e) => handleWalletNameChanged(e.target.value)}
        />{' '}
        <Box display={'contents'} onClick={(e) => handlePencilClick(e)}>
          <PencilGray />
        </Box>
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

      <WalletLoader
        onLoadingComplete={() => setLoadingWallet(false)}
        defaultLoadValue={wallet.status >= 1 ? 5 : 1}
      />

      <AlertSettings />

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
    </>
  );
}
