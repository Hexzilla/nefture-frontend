import { Box, Card, Stack, Typography } from '@mui/material';
import { useMemo } from 'react';

import EthereumSmallIcon from '@components/icons/EthereumSmallIcon';

type Props = {
  address: string;
};

export default function WalletAddress({ address }: Props) {
  const walletAddress = useMemo(() => {
    return address.substring(0, 7) + '...' + address.slice(address.length - 5);
  }, [address]);

  return (
    <Card sx={{ width: '100%' }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ height: '33px', padding: '8px' }}
      >
        <EthereumSmallIcon />

        <Typography color="gray" mt={0.2}>
          {walletAddress}
        </Typography>

        <Stack direction="row" spacing={1}>
          <Box
            component="img"
            src="/assets/icons/nefture/ic_copy.svg"
            sx={{ width: '16px', color: 'gray' }}
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
