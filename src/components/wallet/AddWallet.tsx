import { Button, Stack, TextField, Typography, Box } from '@mui/material';

import { DM_Sans } from '@next/font/google';

import CloseIcon from '@components/icons/GrayClose';
import AlertSettings from './AlertSettings';
import HelpItem from './HelpItem';

type Props = {
  onClose: () => void;
  onEnterWallet: () => void;
  onConnectWallet: () => void;
};

const dmSans = DM_Sans({
  weight: '400',
  subsets: ['latin'],
});

export default function AddWallet({ onClose, onEnterWallet, onConnectWallet }: Props) {
  return (
    <>
      <Box sx={{ cursor: 'pointer' }} onClick={onClose}>
        <CloseIcon />
      </Box>
      <Box sx={{ mx: 2 }}>
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
          onClick={onEnterWallet}
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
            '&:hover': {
              borderColor: 'primary.buttonColor',
              backgroundColor: 'primary.buttonColor',
            },
          }}
          onClick={onConnectWallet}
        >
          Connect Wallet
        </Button>

        <Stack alignItems={'center'} mt={2}>
          <HelpItem title="Advantage of connecting your wallet" type={0} />
        </Stack>

        <AlertSettings />
      </Box>
    </>
  );
}
