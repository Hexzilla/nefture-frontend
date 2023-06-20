import { Switch, Typography, Stack, Box } from '@mui/material';

import HelpWhite from '@components/icons/HelpWhite';
import { WalletStatus } from './types';
import HelpItem from './HelpItem';

type Props = {
  title: String;
};

export default function AlertItem({ title }: Props) {

  return (
    <Stack
      direction="row"
      spacing={3}
      style={{ alignItems: 'center' }}
      justifyContent={'space-between'}
      m={1}
    >
      <HelpItem title={title}/>
      <Switch defaultChecked={true} />
    </Stack>
  );
}
