import { Card, Stack, Typography, Divider } from '@mui/material';

import Image from '@components/image';
import Calendar from '@components/icons/Calendar';

type Props = {};
export default function ComingCard() {
  return (
    <Card sx={{ padding: '1em' }}>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
        mt={1}
        mb={3}
      >
        <Stack direction="column" spacing="12px">
          <Typography>Coming Soon</Typography>
          <Typography color="gray" pt="4px">
            Follow us to stay updated!
          </Typography>
        </Stack>
        <Calendar />
      </Stack>

      <Divider />

      <Stack direction="column" justifyContent="start" alignItems="start" spacing="12px" mt={4}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Image src="/assets/icons/apps/opt_ethereum.svg" />
          <Typography>Optimistic ethereum</Typography>
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center">
          <Image src="/assets/icons/apps/arbitrum.svg" />
          <Typography>Arbitrum</Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
