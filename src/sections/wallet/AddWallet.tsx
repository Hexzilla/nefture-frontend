import { Box, Card, Stack, Typography } from '@mui/material';
import { useState } from 'react';

import CopyGray from '@components/icons/CopyGray';
import Close from '@components/icons/GrayClose';
import PencilGray from '@components/icons/PencilGray';
import VisitGray from '@components/icons/VisitGray';
import AddWalletInformation from './AddWalletInformation';
import AlertItem from './AlertItem';
import CompleteWallet from './CompleteWallet';
import LoadWallet from './LoadWallet';

type Props = {
  onClose: VoidFunction;
};

export default function AddWallet({ onClose }: Props) {
  const [open, setOpen] = useState(false);
  const [display, setDisplay] = useState('flex');
  const [loadingStatus, setLoadingStatus] = useState(0);

  const updateStatus = () => {
    setLoadingStatus(loadingStatus + 1);
  };

  return (
    <Card sx={{ padding: '10px 20px', minHeight: '80vh' }}>
      <Box sx={{ cursor: 'pointer' }} onClick={onClose}>
        <Close />
      </Box>
      {loadingStatus >= 1 && (
        <Typography variant="h6" textAlign={'center'}>
          Cactus <PencilGray />
        </Typography>
      )}
      {loadingStatus >= 1 && (
        <Typography color={'gray'} textAlign={'center'} fontSize={'12px'} mb={2}>
          0x899999...0B2 <CopyGray />
          <VisitGray />
        </Typography>
      )}
      {loadingStatus == 0 && <AddWalletInformation onClick={updateStatus} />}
      {(loadingStatus == 1 || loadingStatus == 2 || loadingStatus == 3 || loadingStatus == 4) && (
        <LoadWallet loadingStatus={loadingStatus} updateLoadingStatus={updateStatus} />
      )}
      {loadingStatus == 5 && <CompleteWallet />}
      <Card sx={{ marginTop: '2em' }}>
        <AlertItem title="Real-time Alert" />
      </Card>
      <Card sx={{ marginTop: '1em', marginBottom: '1em' }}>
        <AlertItem title="Monthly Alert" />
      </Card>
      {(loadingStatus == 1 || loadingStatus == 2 || loadingStatus == 3 || loadingStatus == 4) && (
        <Stack
          direction={'column'}
          sx={{
            backgroundColor: 'primary.main',
            marginTop: '24px',
            padding: '12px',
            borderRadius: '12px',
          }}
          mb={2}
        >
          <Typography fontSize={'15px'}>Activate Wallet Monitoring</Typography>
          <Typography fontSize={'14px'} mt={1}>
            Receive an alert when a threat is detected.
          </Typography>
        </Stack>
      )}
    </Card>
  );
}