import { Card, Stack, Switch, Typography } from '@mui/material';


type Props = {
  title: String;
  type: number;
};

const defaultStyle = [{
  backgroundImage: 'linear-gradient(to right, #0EAE88, #1350C7)',
  WebkitBackgroundClip: 'text',
  MozBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  display: 'inline-block',
},{
  color:'#1350C7',
  margin:'0.2em'
}];
const stackStyle = {
  spacing: 2,
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: '1em',
  marginBottom: '1em',
};

export default function NotificationCard({ title,type }: Props) {
  return (
    <Card sx={{ padding: '1em' }}>
      <Stack direction="row" sx={stackStyle}>
        <Typography style={{}}>{title}</Typography>
        {type==0&&<Switch defaultChecked color="success" />}
        {type==1&&<Switch defaultChecked color="primary" />}
      </Stack>
      <Typography style={defaultStyle[type]}>PRO</Typography>
      <Typography mt={1} color={'gray'}>
        This alerts tracks all your approvals over time.
      </Typography>
      <Stack direction="row" sx={stackStyle}>
        <Typography style={defaultStyle[type]}>See example</Typography>
        {type==0&&<Card sx={{ padding: '0.5em', textAlign: 'center', borderRadius: 1 }}>
          <Typography>Included with RPC</Typography>
        </Card>}
      </Stack>
    </Card>
  );
}
