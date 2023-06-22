import { Button, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';

import HelpItem from './HelpItem';

type Props = {
  onClick: VoidFunction;
};

export default function AddWalletInformation({ onClick }: Props) {
  const [open, setOpen] = useState(false);
  const [display, setDisplay] = useState('flex');

  return (
    <>
      <Typography variant="h6" textAlign={'center'}>
        Add new Wallet
      </Typography>
      <TextField fullWidth={true} sx={{ marginTop: '1em' }} placeholder={'Enter wallet or ENS'} />
      <Button
        variant="contained"
        size="large"
        fullWidth={true}
        sx={{ marginTop: '1em', '&:hover': { backgroundColor: 'primary.main' } }}
        onClick={onClick}
      >
        Enter Wallet
      </Button>
      <Typography textAlign={'center'} sx={{ marginTop: '1em' }}>
        Or
      </Typography>
      <Button
        variant="outlined"
        size="large"
        fullWidth={true}
        sx={{ marginTop: '1em' }}
        onClick={onClick}
      >
        Connect Wallet
      </Button>
      <Stack alignItems={'center'} mt={1}>
        <HelpItem title="Advantage of connecting your wallet" type={0}/>
      </Stack>
    </>
  );
}
