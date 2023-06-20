import { useState } from 'react';
import Image from '@components/image/Image';
import { Card, Stack, Switch, TextField, Typography, Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';

type Props = {
  title: String;
  type: number;
};

const defaultStyle = [
  {
    backgroundImage: 'linear-gradient(to right, #0EAE88, #1350C7)',
    WebkitBackgroundClip: 'text',
    MozBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline-block',
  },
  {
    color: '#1350C7',
    margin: '0.2em',
  },
];
const stackStyle = {
  spacing: 2,
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: '1em',
  marginBottom: '1em',
};
const imageResources = [
  '/assets/icons/navbar/ic_dashboard.svg',
  '/assets/icons/apps/ic_telegram.svg',
];
const captions = ['Continue with Email', 'Continue with telegram'];
const connectAnother = ['Or Continue with telgram', 'Or Continue with email'];

export default function SettingsCard({ title, type }: Props) {
  const [connectEmail, setConnectEmail] = useState(false);

  const onClicked = () => {
    setConnectEmail(true);
    (async () => {
      setTimeout(() => {
        setConnectEmail(false);
      }, 1000);
    })();
  };

  return (
    <Card sx={{ padding: '1em' }}>
      <Stack direction="row" alignItems="center" spacing={1} mt={2}>
        <Image src={imageResources[type]} width={24} />
        <Typography>{title}</Typography>
      </Stack>
      <TextField fullWidth={true} sx={{ marginTop: '1em' }} value={'example@gmail.com'} />
      <LoadingButton
        loading={connectEmail}
        type="submit"
        variant={'contained'}
        fullWidth={true}
        color="primary"
        sx={{
          marginTop: '1em',
          padding: '1em',
          '&:hover': {
            backgroundColor: '#2965FF',
          },
        }}
        onClick={onClicked}
      >
        {(type==1 && connectEmail==false)&&<Image src="/assets/icons/apps/ic_telegram.svg"/>}
        {captions[type]}
      </LoadingButton>
      <Typography color={'gray'} sx={{ width: '100%', marginTop: '0.5em', textAlign: 'center' }}>
        {connectAnother[type]}
      </Typography>
    </Card>
  );
}
