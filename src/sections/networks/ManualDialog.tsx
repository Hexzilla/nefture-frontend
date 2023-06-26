import { Box, Card, Dialog, Divider, Stack, Typography } from '@mui/material';
import CopyWhite from '@components/icons/CopyWhite';
import EthereumIconRectangle from '@components/icons/EthereumIconRectangle';
import GrayClose from '@components/icons/GrayClose';
import Play from '@components/icons/Play';
import Image from '@components/image';
import useCopyToClipboard from '@hooks/useCopyToClipboard';
import { useSnackbar } from 'notistack';
import InformationView from './InformationView';

type Props = {
  open: boolean;
  onClose: (open: boolean) => void;
};

export default function ManualDialog({ open, onClose }: Props) {
  const { enqueueSnackbar } = useSnackbar();
  const { copy } = useCopyToClipboard();

  const onCopy = (text: string) => {
    if (text) {
      enqueueSnackbar('Copied!');
      copy(text);
    }
  };

  return (
    <Dialog fullWidth maxWidth="xs" open={open} onClose={() => onClose(false)}>
      <Stack>
        <Card sx={{ padding: '1em' }}>
          <Box
            sx={{ marginTop: '-10px', marginLeft: '-10px', cursor: 'pointer' }}
            onClick={() => onClose(false)}
          >
            <GrayClose />
          </Box>
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
                <Box sx={{ cursor: 'pointer' }} onClick={() => onCopy('https://rpc.nefture.com')}>
                  <CopyWhite />
                </Box>
              </Stack>
            </Stack>
            <EthereumIconRectangle />
          </Stack>
          <Divider />
          <Card
            sx={{
              padding: '0.5em',
              textAlign: 'center',
              marginTop: '1em',
              borderRadius: 1,
              cursor: 'pointer',
            }}
            onClick={() => onCopy('https://rpc.nefture.com')}
          >
            <Typography>Copy URL and add manually</Typography>
          </Card>
          <Typography mt={2} mb={3}>
            Click on your network and then click on “Add Network”. Enter the following parameters:
          </Typography>
          <InformationView title="Network Name" value="Nefture RPC Mainnet" onCopy={onCopy} />
          <InformationView title="New RPC URL" value="Https://nefture.com" onCopy={onCopy} />
          <InformationView title="Chain ID" value="ETH" onCopy={onCopy} />
          <InformationView title="Currency Symbol" value="1" onCopy={onCopy} />
          <InformationView title="BlockExplorerURL" value="https://etherscan.io" onCopy={onCopy} />
          <Box sx={{ position: 'relative', minHeight:'200px' }}>
            <Image src="/assets/images/network/video.png" mt={2} />
            <Box sx={{ position: 'absolute', top: '40%', left: '40%' }}>
              <Play />
            </Box>
          </Box>
        </Card>
      </Stack>
    </Dialog>
  );
}
