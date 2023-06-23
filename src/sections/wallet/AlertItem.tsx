import { Switch, Stack } from '@mui/material';

import HelpItem from './HelpItem';

type Props = {
  title: String;
  type: number;
};

export default function AlertItem({ title, type }: Props) {

  return (
    <Stack
      direction="row"
      spacing={3}
      style={{ alignItems: 'center' }}
      justifyContent={'space-between'}
      ml={1}
      mr={1}
      mt={2}
      mb={2}
    >
      <HelpItem title={title} type={type}/>
      <Switch defaultChecked={true} />
    </Stack>
  );
}
