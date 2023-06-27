import { useState } from 'react';
import Image from '@components/image/Image';
import { Card, Stack, Switch, TextField, Typography, Button, Box, Link } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import BlueCheck from '@components/icons/BlueCheck';

type Props = {
  title: String;
};

const imageResources = '/assets/icons/apps/ic_telegram.svg';
const captions = ['Continue with Telegram', '@wellford', '@wellford'];
const connectAnother = 'Or Continue with telgram';
const backgrounds = ['primary.buttonColor', 'white', 'primary.main'];
const COLORS = ['white', 'primary.main', 'white'];

export default function SettingsSocialCard({ title }: Props) {
  const [connectAccount, setConnectAccount] = useState(false);
  const [editAccount, setEditAccount] = useState(false);
  const [status, setStatus] = useState(0);

  const onClicked = () => {
    if (status == 0) {
      setConnectAccount(true);
      (async () => {
        setTimeout(() => {
          setConnectAccount(false);
          setStatus(1);
        }, 1000);
      })();
    }
    if (status == 1) setStatus(2);
  };

  const onEditClicked = () => {
    setEditAccount(true);
    (async () => {
      setTimeout(() => {
        setEditAccount(false);
      }, 1000);
    })();
  };

  return (
    <Card sx={{ padding: '1em' }}>
      <Stack direction="row" alignItems="center" spacing={1} mt={2}>
        <Image src={imageResources} width={24} />
        <Typography>{title}</Typography>
      </Stack>
      <LoadingButton
        loading={connectAccount}
        type="submit"
        variant={'contained'}
        fullWidth={true}
        sx={{
          backgroundColor: backgrounds[status],
          marginTop: '1em',
          height: '52px',
          padding: '1em',
          '&:hover': {
            backgroundColor: backgrounds[status],
            boxShadow: 'none',
          },
          color: COLORS[status],
        }}
        onClick={onClicked}
      >
        {status != 1 && (
          <Box mr={1} visibility={connectAccount ? 'hidden' : 'visible'}>
            <Image src="/assets/icons/apps/ic_telegram.svg" />
          </Box>
        )}
        {status == 1 && (
          <Box mr={1} visibility={connectAccount ? 'hidden' : 'visible'}>
            <BlueCheck />
          </Box>
        )}
        {captions[status]}
      </LoadingButton>
      {status != 0 && (
        <LoadingButton
          variant="outlined"
          fullWidth={true}
          loading={editAccount}
          sx={{
            color: 'white',
            backgroundColor: 'primary.buttonColor',
            marginTop: '1em',
            borderColor: 'primary.buttonColor',
            height: '52px',
            '&:hover': {
              backgroundColor: 'primary.buttonColor',
              boxShadow: 'none',
              borderColor: 'gray',
            },
          }}
          onClick={onEditClicked}
        >
          Edit Telegram id
        </LoadingButton>
      )}
      {status == 0 && (
        <Typography
          color={'gray'}
          sx={{ width: '100%', marginTop: '1em', textAlign: 'center', fontSize: '14px' }}
        >
          If button doesn't work,{' '}
          <Link
            sx={{ textDecoration: 'underline', color: 'gray' }}
            href="https://support.nefture.com"
          >
            click here
          </Link>{' '}
          to open Nefture security bot
        </Typography>
      )}
      {status == 0 && (
        <Typography
          color={'gray'}
          sx={{ width: '100%', marginTop: '3em', textAlign: 'center', fontSize: '14px' }}
        >
          Need Help?{' '}
          <Link
            color={'primary.main'}
            href="https://support.nefture.com"
            sx={{ textDecoration: 'none' }}
          >
            Contact US
          </Link>
        </Typography>
      )}
      {status != 0 && (
        <Typography
          color={'gray'}
          sx={{ width: '100%', marginTop: '0.5em', textAlign: 'center', fontSize: '14px' }}
        >
          {connectAnother}
        </Typography>
      )}
    </Card>
  );
}
