import { Card, Stack, Switch, Typography } from '@mui/material';


type Props = {
  type: String;
};

const defaultStyle = {
  backgroundImage: 'linear-gradient(to right, #0EAE88, #1350C7)',
  WebkitBackgroundClip: 'text',
  MozBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  display: 'inline-block',
};
const stackStyle = {
  spacing: 2,
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: '1em',
  marginBottom: '1em',
};

export default function NotificationCard({ type }: Props) {
  return (
    <Card sx={{ padding: '1em' }}>
      <Stack direction="row" sx={stackStyle}>
        <Typography style={{}}>Smart Contract Analysis</Typography>
        <Switch defaultChecked color="success" />
      </Stack>
      <Typography style={defaultStyle}>PRO</Typography>
      <Typography mt={1} color={'gray'}>
        This alerts tracks all your approvals over time.
      </Typography>
      <Stack direction="row" sx={stackStyle}>
        <Typography style={defaultStyle}>See example</Typography>
        <Card sx={{ padding: '0.5em', textAlign: 'center', borderRadius: 1 }}>
          <Typography>Included with RPC</Typography>
        </Card>
      </Stack>
    </Card>
  );
}
