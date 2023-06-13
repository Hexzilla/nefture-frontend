import { Box, Chip, Stack, Typography } from '@mui/material';

import Product from '@components/products/Product';
import PersonAvatar from '@components/avatars/PersonAvatar';
import ScheduledIcon from '@components/icons/Scheduled';

export type Props = {
  title: string;
  logo: string;
  url: string;
  date: string;
  user: string;
};

export default function ProductScheduled({ title, logo, url, date, user }: Props) {
  return (
    <Stack direction="column" spacing={2}>
      <Product title={title} logo={logo} url={url} />

      <Stack direction="row" spacing={4}>
        <Chip
          label={
            <Stack direction="row" spacing={1} alignItems="center">
              <ScheduledIcon />
              <div>{date}</div>
            </Stack>
          }
          sx={{ borderRadius: 1 }}
        />
        <PersonAvatar name={user || ''} />
      </Stack>
    </Stack>
  );
}
