import { Switch, Typography } from '@mui/material';

import HelpWhite from '@components/icons/HelpWhite';
import { WalletStatus } from './types';

type Props = {
  title: String;
};

export default function AlertItem({ title }: Props) {

  return (
    <>
      <HelpWhite />
      <Typography>{title}</Typography>
      <Switch defaultChecked={true} />
    </>
  );
}
