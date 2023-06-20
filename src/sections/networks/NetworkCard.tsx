import { Box, Button, Card, Divider, Stack, Typography } from '@mui/material';

import CopyWhite from '@components/icons/CopyWhite';
import EthereumIconRectangle from '@components/icons/EthereumIconRectangle';
import PolygonIcon from '@components/icons/Polygon';
import Image from '@components/image';

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
          sx={{ height: '52px', width: '100%', '&:hover': { backgroundColor: 'primary.main' } }}
        >
          Add to Wallet
        </Button>
      </Stack>
      <Card
        sx={{
          textAlign: 'center',
          marginTop: '1em',
          borderRadius: 1,
          cursor: 'pointer',
          height: '52px',
          backgroundColor:'primary.buttonColor'
        }}
        onClick={() => addWallet(true)}
      >
        <Typography sx={{ lineHeight: '52px' }}>Copy URL and add manually</Typography>
      </Card>
    </Card>
  );
}
