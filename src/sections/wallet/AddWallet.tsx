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
import SvgColor from '@components/svg-color/SvgColor';

type Props = {
  onClose: VoidFunction;
  loadingStatus:number;
  updateLoading: VoidFunction;
};

export default function AddWallet({ onClose, loadingStatus, updateLoading }: Props) {
  const [open, setOpen] = useState(false);
  const [display, setDisplay] = useState('flex');

  return (
    <Card sx={{ padding: '10px 20px', minHeight: '80vh', marginBottom:'1em'}}>
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
          0x899999...0B2 
          <SvgColor
            src="/assets/icons/nefture/ic_copy.svg"
            sx={{marginLeft:'2px', marginBottom: '-0.5em', width: '16px' }}
          />
          <SvgColor
            src="/assets/icons/nefture/ic_visit.svg"
            sx={{ marginBottom: '-0.5em', width: '16px' }}
          />
        </Typography>
      )}
      {loadingStatus == 0 && <AddWalletInformation onClick={updateLoading} />}
      {(loadingStatus == 1 || loadingStatus == 2 || loadingStatus == 3 || loadingStatus == 4) && (
        <LoadWallet loadingStatus={loadingStatus} updateLoadingStatus={updateLoading} />
      )}
      {loadingStatus == 5 && <CompleteWallet />}
      <Card sx={{ marginTop: '2em', borderRadius:'8px' }}>
        <AlertItem title="Real-time Alert" type={1}/>
      </Card>
      <Card sx={{ marginTop: '1em', marginBottom: '1em', borderRadius:'8px' }}>
        <AlertItem title="Monthly Alert" type={1}/>
      </Card>
      {(loadingStatus == 1 || loadingStatus == 2 || loadingStatus == 3 || loadingStatus == 4) && (
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
    </Card>
  );
}
