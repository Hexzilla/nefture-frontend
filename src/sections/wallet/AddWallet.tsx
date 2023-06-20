import { Box, Card } from '@mui/material';
import { useState } from 'react';

import Close from '@components/icons/GrayClose';
import AddWalletInformation from './AddWalletInformation';
import AlertItem from './AlertItem';
import LoadWallet from './LoadWallet';

type Props = {
  onClose: VoidFunction;
};

export default function AddWallet({ onClose }: Props) {
  const [open, setOpen] = useState(false);
  const [display, setDisplay] = useState('flex');
  const [loadingStatus, setLoadingStatus] = useState(0);

  const updateStatus = () =>
  {
    setLoadingStatus(1)
  }

  return (
    <Card sx={{ padding: '10px 20px', height: '80vh' }}>
    <Box sx={{ cursor: 'pointer' }} onClick={onClose}>
      <Close />
    </Box>
      {loadingStatus == 0 && <AddWalletInformation onClick={updateStatus}/>}
      {loadingStatus == 1 && <LoadWallet />}
      <Card sx={{ marginTop: '2em' }}>
        <AlertItem title="Real-time Alert" />
      </Card>
      <Card sx={{ marginTop: '1em', marginBottom: '1em' }}>
        <AlertItem title="Monthly Alert" />
      </Card>
    </Card>
  );
}
