import { Button, Stack, TextField, Typography, Box } from '@mui/material';
import { useState } from 'react';

import HelpItem from './HelpItem';
import { DM_Sans } from '@next/font/google';

type Props = {
  onClick: VoidFunction;
};

const dmSans = DM_Sans({
  weight: '400',
  subsets: ['latin'],
});

export default function AddWallet({ onClick }: Props) {
  const [open, setOpen] = useState(false);
  const [display, setDisplay] = useState('flex');

  return (
    <Box ml={2} mr={2}>
      <Typography variant="h6" textAlign={'center'} mt={2} className={dmSans.className}>
        Add new Wallet
      </Typography>
      <TextField
        fullWidth={true}
        sx={{ marginTop: '2em', backgroundColor: 'primary.buttonColor' }}
        placeholder={'Enter wallet or ENS'}
      />
      <Button
        variant="contained"
        size="large"
        fullWidth={true}
        sx={{ marginTop: '1em', '&:hover': { backgroundColor: 'primary.main' } }}
        onClick={onClick}
      >
        Enter Wallet
      </Button>
      <Typography textAlign={'center'} sx={{ marginTop: '3em', fontSize: '10px' }}>
        Or
      </Typography>
      <Button
        variant="outlined"
        size="large"
        fullWidth={true}
        sx={{
          marginTop: '2em',
          backgroundColor: 'primary.buttonColor',
          borderColor: 'primary.buttonColor',
          color: 'white',
          '&:hover': { borderColor: 'primary.buttonColor', backgroundColor: 'primary.buttonColor' },
        }}
        onClick={onClick}
      >
        Connect Wallet
      </Button>
      <Stack alignItems={'center'} mt={2}>
        <HelpItem title="Advantage of connecting your wallet" type={0} />
      </Stack>
    </Box>
  );
}
