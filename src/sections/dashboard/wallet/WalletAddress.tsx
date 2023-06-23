import { Box, Card, Stack, SxProps, Theme, Typography } from '@mui/material';

import EthereumSmallIcon from '@components/icons/EthereumSmallIcon';

type Props = {
  sx?: SxProps<Theme>;
};

export default function WalletAddress({ sx }: Props) {
  return (
    <>
    <Box height={'60px'}/>
    <Card sx={sx}>
      <Stack direction="row" justifyContent="space-between">
        <EthereumSmallIcon />
        <Typography color={'gray'} mt={0.2}>
          EX03dk..20DO2
        </Typography>
        <Stack direction="row">
          <Box
            component="img"
            src="/assets/icons/nefture/ic_copy.svg"
            sx={{ marginLeft: '2px', width: '16px', color: 'gray' }}
          />
          <Box
            component="img"
            src="/assets/icons/nefture/ic_close_red.svg"
            sx={{ marginLeft: '2px', width: '16px', color: 'gray' }}
          />
        </Stack>
      </Stack>
    </Card>
    </>
  );
}
