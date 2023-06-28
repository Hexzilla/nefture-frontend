import { Card, Link, Stack, Switch, Typography } from '@mui/material';
import { DM_Mono } from '@next/font/google';
import NextLink from 'next/link';

type Props = {
  title: String;
  type: number;
};

const proStyle = [
  {
    backgroundImage: 'linear-gradient(to right, #0EAE88 100%, #1350C7)',
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

const defaultStyle = [
  {
    backgroundImage: 'linear-gradient(to right, #0EAE88 40%, #1350C7)',
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
};

const switchStyle = {
  width: '66px',
  height: '42px',
  '.MuiSwitch-thumb': { width: '18px', height: '18px' },
  '.Mui-checked': { marginLeft: '4px' },
};

const dmMono = DM_Mono({
  weight: '400',
  subsets: ['latin'],
});

export default function NotificationCard({ title, type }: Props) {
  return (
    <Card sx={{ padding: '30px' }}>
      <Stack direction="row" sx={stackStyle}>
        <Typography style={{}}>{title}</Typography>
        {type == 0 && <Switch defaultChecked color="success" sx={switchStyle} />}
        {type == 1 && <Switch defaultChecked color="primary" sx={switchStyle} />}
      </Stack>
      <Typography style={proStyle[type]}>PRO</Typography>
      <Typography
        mt={1}
        color={'gray'}
        sx={{ marginTop: '1.5em', marginBottom: '1em', fontSize: '12px' }}
        className={dmMono.className}
      >
        This alerts tracks all your approvals over time.
      </Typography>

      <Stack direction="row" sx={stackStyle}>
        <Link
          component={NextLink}
          href={'https://example.nefture.com'}
          color="inherit"
          noWrap
          rel="noopener noreferrer"
          target="_blank"
        >
          <Typography style={defaultStyle[type]}>See example</Typography>
        </Link>

        {type == 0 && (
          <Card
            sx={{
              padding: '0.5em',
              textAlign: 'center',
              borderRadius: 2,
              backgroundColor: 'primary.buttonColor',
            }}
          >
            <Typography>Included with RPC</Typography>
          </Card>
        )}
      </Stack>
    </Card>
  );
}
