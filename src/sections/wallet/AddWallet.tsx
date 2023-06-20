import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Box, Button, Card, Collapse, Stack, TextField, Typography } from '@mui/material';

import Alert from '@components/icons/Alert';
import Down from '@components/icons/Down';
import Close from '@components/icons/GrayClose';
import Help from '@components/icons/Help';
import CheckGreen from '@components/icons/CheckGreen';
import TransactionIcon from '@components/icons/Transaction';
import AlertItem from './AlertItem';
import HelpItem from './HelpItem';

type Props = {
  onClose: VoidFunction;
};

const buttonSX = {
  width: '100%',
  backgroundColor: 'black',
  marginTop: '12px',
  '&:hover': {
    backgroundColor: '#2965FF',
  },
};

export default function AddWallet({ onClose }: Props) {
  const [open, setOpen] = useState(false);
  const [display, setDisplay] = useState('flex');
  const [arrowVisible, setArrowVisible] = useState('visible');

  const changeOpen = () => {
    setOpen(!open);
    if (display === 'flex') setDisplay('none');
    else setDisplay('flex');
  };

  return (
    <Card sx={{ padding: '10px 20px', height: '80vh' }}>
      <Box sx={{ cursor: 'pointer' }} onClick={onClose}>
        <Close />
      </Box>
      <Typography variant="h6" textAlign={'center'}>
        Add new Wallet
      </Typography>
      <TextField fullWidth={true} sx={{ marginTop: '1em' }} placeholder={'Enter wallet or ENS'} />
      <Button variant="contained" size="large" fullWidth={true} sx={{ marginTop: '1em' }} onClick={onClose}>
        Enter Wallet
      </Button>
      <Typography textAlign={'center'} sx={{ marginTop: '1em' }}>
        Or
      </Typography>
      <Button variant="outlined" size="large" fullWidth={true} sx={{ marginTop: '1em' }} onClick={onClose}>
        Connect Wallet
      </Button>
      <Stack alignItems={'center'} mt={1}>
        <HelpItem title="Advantage of connecting your wallet" />
      </Stack>
      <Card sx={{ marginTop: '2em' }}>
        <AlertItem title="Real-time Alert" />
      </Card>
      <Card sx={{ marginTop: '1em', marginBottom: '1em' }}>
        <AlertItem title="Monthly Alert" />
      </Card>
    </Card>
  );
}
