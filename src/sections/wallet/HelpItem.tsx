import { Switch, Typography, Stack, Box } from '@mui/material';

import HelpWhite from '@components/icons/HelpWhite';
import { WalletStatus } from './types';
import SvgColor from '@components/svg-color/SvgColor';

type Props = {
  title: String;
  type: number;
};

export default function HelpItem({ title, type }: Props) {
  return (
    <Stack direction="row">
      {type==0&&<SvgColor
        src="/assets/icons/nefture/ic_help_white_round.svg"
        sx={{ marginBottom: '-0.4em', width: '16px' }}
      />}
      <Typography sx={{ marginLeft: '0.5em', marginTop: '3px' }}>{title}</Typography>
      {type==1&&<SvgColor
        src="/assets/icons/nefture/ic_help_white_round.svg"
        sx={{ marginBottom: '-0.4em', width: '16px', marginLeft:'0.5em' }}
      />}
    </Stack>
  );
}
