import { Switch, Typography, Stack } from '@mui/material';

import HelpWhite from '@components/icons/HelpWhite';
import { WalletStatus } from './types';

type Props = {
  title: String;
};

export default function AlertItem({ title }: Props) {

  return (
    <Stack direction="row" spacing={3} style={{alignItems:'center'}}>
      <HelpWhite />
      <Typography>{title}</Typography>
      <Switch defaultChecked={true} />
    </Stack>
  );
}
