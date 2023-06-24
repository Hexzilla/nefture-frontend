import { Box, Button, Card, Divider, Stack, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';

import CopyWhite from '@components/icons/CopyWhite';
import EthereumIconRectangle from '@components/icons/EthereumIconRectangle';
import PolygonIcon from '@components/icons/Polygon';
import Image from '@components/image';
import useCopyToClipboard from '@hooks/useCopyToClipboard';

type Props = {
  type: string;
  name: string;
  rpcUrl: string;
  addWallet: (value: boolean) => void;
};

export default function NetworkCard({ name, rpcUrl, type, addWallet }: Props) {
  const { copy } = useCopyToClipboard();
  const { enqueueSnackbar } = useSnackbar();

  const copyToClipboard = (content: string) => {
    copy(content);
    enqueueSnackbar('Copied!');
  };

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
          <Typography>{name}</Typography>
          <Stack direction="row" spacing={1} justifyContent="space-between" alignItems="center">
            <Typography color="gray">{rpcUrl}</Typography>
            <Box
              component="div"
              pt="4px"
              sx={{ cursor: 'pointer' }}
              onClick={() => copyToClipboard(rpcUrl)}
            >
              <CopyWhite />
            </Box>
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
          backgroundColor: 'primary.buttonColor',
        }}
        onClick={() => addWallet(true)}
      >
        <Typography sx={{ lineHeight: '52px' }}>Copy URL and add manually</Typography>
      </Card>
    </Card>
  );
}
