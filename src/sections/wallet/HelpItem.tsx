import { Switch, Typography, Stack, Box } from '@mui/material';

import HelpWhite from '@components/icons/HelpWhite';
import { WalletStatus } from './types';

type Props = {
  title: String;
};

export default function HelpItem({ title }: Props) {

  return (
      <Stack direction="row">
        <HelpWhite />
        <Typography sx={{marginLeft:'0.5em'}}>{title}</Typography>
      </Stack>
  );
}
