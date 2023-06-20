import { Card, Stack, Typography, Box, Divider, Button } from '@mui/material';

import EthereumIcon from '@components/icons/EthereumIcon';
import BlueCheck from '@components/icons/BlueCheck';
import ArrowCircleUp from '@components/icons/ArrowCircleUp';
import EthereumIconRectangle from '@components/icons/EthereumIconRectangle';
import Image from '@components/image';
import Copy from '@components/icons/Copy';
import CopyWhite from '@components/icons/CopyWhite';
import ShopifyIcon from '@components/icons/Shopify';
import { SVGProps } from 'react';
import PolygonIcon from '@components/icons/Polygon';
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
        <Stack direction="column">
          <Typography>Ethereum</Typography>
          <Typography color="gray" mt={1}>
            Follow us to stay updated!
          </Typography>
        </Stack>
        <Calendar />
      </Stack>
      <Divider />
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        mt={2}
        mb={1}
      >
        <Image src="/assets/icons/apps/opt_ethereum.svg" />
        <Typography>Optimistic ethereum</Typography>
      </Stack>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        mb={3}
      >
        <Image src="/assets/icons/apps/arbitrum.svg" />
        <Typography>Arbitrum</Typography>
      </Stack>
    </Card>
  );
}
