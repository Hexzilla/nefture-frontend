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

type Props = {
  type: String;
  addWallet: (value: boolean) => void;
};
export default function NetworkCard({ type, addWallet }: Props) {
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
          <Stack direction="row" spacing={2} justifyContent="space-between" mt={1}>
            <Typography color="gray">https://rpc.nefture.com</Typography>
            <CopyWhite />
          </Stack>
        </Stack>
        <Box>{type === 'ethereum' ? <EthereumIconRectangle /> : <PolygonIcon />}</Box>
      </Stack>
      <Divider />
      <Stack direction="row" mt={2}>
        <Button
          variant="contained"
          startIcon={<Image src="/assets/icons/apps/metamask.svg" />}
          sx={{ height: '100%', width: '100%' }}
        >
          Add to Wallet
        </Button>
      </Stack>
      <Card
        sx={{
          padding: '0.5em',
          textAlign: 'center',
          marginTop: '1em',
          borderRadius: 1,
          cursor: 'pointer',
        }}
        onClick={() => addWallet(true)}
      >
        <Typography>Copy URL and add manually</Typography>
      </Card>
    </Card>
  );
}
