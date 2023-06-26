import Image from '@components/image/Image';
import { LoadingButton } from '@mui/lab';
import { Card, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';

type Props = {
  title: String;
};

const imageResources = '/assets/icons/nefture/ic_email.svg';
const captions = 'Continue with Email';
const connectAnother = 'Or Continue with telgram';
const backgrounds = ['primary.main', 'white'];
const COLORS = ['white', 'primary.main'];

export default function SettingsEmailCard({ title }: Props) {
  const [connectEmail, setConnectEmail] = useState(false);
  const [status, setStatus] = useState(0);

  const onClicked = () => {
    setConnectEmail(true);
    (async () => {
      setTimeout(() => {
        setConnectEmail(false);
        setStatus(1)
      }, 1000);
    })();
  };

  return (
    <Card sx={{ padding: '1em' }}>
      <Stack direction="row" alignItems="center" spacing={1} mt={2}>
        <Image src={imageResources} width={24} />
        <Typography>{title}</Typography>
      </Stack>
      <TextField
        fullWidth={true}
        sx={{ marginTop: '1em', height: '52px' }}
        value={'example@gmail.com'}
      />
      <LoadingButton
        loading={connectEmail}
        type="submit"
        variant={'contained'}
        fullWidth={true}
        sx={{
          backgroundColor: backgrounds[status],
          marginTop: '1em',
          padding: '1em',
          '&:hover': {
            backgroundColor: backgrounds[status],
          },
          height: '52px',
          color: COLORS[status],
        }}
        onClick={onClicked}
      >
        {captions}
      </LoadingButton>
      <Typography
        color={'gray'}
        sx={{ width: '100%', marginTop: '0.5em', textAlign: 'center', fontSize: '14px' }}
      >
        {connectAnother}
      </Typography>
    </Card>
  );
}
