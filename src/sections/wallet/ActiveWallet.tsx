import { Box, Card, Stack, Typography } from '@mui/material';
import { useState } from 'react';

import Close from '@components/icons/GrayClose';
import PencilGray from '@components/icons/PencilGray';
import SvgColor from '@components/svg-color/SvgColor';
import { Wallet } from '@components/wallet';
import AlertItem from '@components/wallet/AlertItem';

import CompleteWallet from './CompleteWallet';
import LoadWallet from './LoadWallet';
import ChangeWalletDialog from './ChangeWalletDialog';

type Props = {
  onClose: VoidFunction;
  loadingStatus: number;
  updateLoading: VoidFunction;
  copyToClipboard: (content: string) => void;
  activeWallet: Wallet;
};

export default function ActiveWallet({
  onClose,
  loadingStatus,
  updateLoading,
  copyToClipboard,
  activeWallet,
}: Props) {
  const [open, setOpen] = useState(false);
  const [walletName, setWalletname] = useState(activeWallet.title);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card
        sx={{
          padding: '10px 20px',
          minHeight: '80vh',
          marginBottom: '1em',
          paddingLeft: '2em',
          paddingRight: '2em',
        }}
      >
        <Box sx={{ cursor: 'pointer' }} onClick={onClose}>
          <Close />
        </Box>

        <Typography
          variant="h6"
          textAlign={'center'}
          onClick={() => setOpen(true)}
          sx={{ cursor: 'pointer' }}
        >
          {walletName} <PencilGray />
        </Typography>

        <Typography
          color={'gray'}
          textAlign={'center'}
          fontSize={'12px'}
          mb={2}
          sx={{ cursor: 'pointer' }}
          onClick={() => copyToClipboard('0x8999999302930B2 ')}
        >
          0x899999...0B2
          <SvgColor
            src="/assets/icons/nefture/ic_copy.svg"
            sx={{ marginLeft: '2px', marginBottom: '-0.5em', width: '16px' }}
          />
          <SvgColor
            src="/assets/icons/nefture/ic_visit.svg"
            sx={{ marginBottom: '-0.5em', width: '16px' }}
          />
        </Typography>

        <LoadWallet loadingStatus={loadingStatus} updateLoadingStatus={updateLoading} />

        <CompleteWallet activeWallet={activeWallet} />

        <Card sx={{ marginTop: '2em', borderRadius: '8px' }}>
          <AlertItem title="Real-time Alert" type={1} />
        </Card>
        <Card sx={{ marginTop: '1em', marginBottom: '1em', borderRadius: '8px' }}>
          <AlertItem title="Monthly Alert" type={1} />
        </Card>

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
      </Card>

      <ChangeWalletDialog
        open={open}
        handleClose={handleClose}
        onChange={setWalletname}
        walletName={walletName}
      />
    </>
  );
}
