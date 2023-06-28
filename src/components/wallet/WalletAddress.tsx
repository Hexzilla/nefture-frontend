import { Box, Card, Stack, Typography, SxProps, Theme } from '@mui/material';
import { useMemo } from 'react';
import { useSnackbar } from 'notistack';

import EthereumSmallIcon from '@components/icons/EthereumSmallIcon';
import useCopyToClipboard from '@hooks/useCopyToClipboard';

type Props = {
  address: string;
  sx?: SxProps<Theme>;
};

export default function WalletAddress({ address, sx }: Props) {
  const { copy } = useCopyToClipboard();
  const { enqueueSnackbar } = useSnackbar();

  const walletAddress = useMemo(() => {
    return address.substring(0, 7) + '...' + address.slice(address.length - 5);
  }, [address]);

  const copyToClipboard = (content: string) => {
    copy(content);
    enqueueSnackbar('Copied!');
  };

  return (
    <Card sx={{ padding: '4px 8px', ...sx }}>
      <Stack direction="row" justifyContent="space-between">
        <EthereumSmallIcon />

        <Typography color="gray" mt={0.2}>
          {walletAddress}
        </Typography>

        <Stack direction="row" spacing={1}>
          <Box
            component="img"
            src="/assets/icons/nefture/ic_copy.svg"
            sx={{ width: '16px', color: 'gray', cursor: 'pointer' }}
            onClick={() => copyToClipboard(walletAddress)}
          />
          <Box
            component="img"
            src="/assets/icons/nefture/ic_close_red.svg"
            sx={{ width: '16px', color: 'gray' }}
          />
        </Stack>
      </Stack>
    </Card>
  );
}
