import { Box, Stack, Typography } from '@mui/material';

import { Coin } from '@components/risks/types';

type Props = {
  item: Coin;
};

export default function CoinItem({ item }: Props) {
  return (
    <Stack direction="row" spacing={2} justifyContent="space-between" mt={1} mb={1}>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Box
          component="img"
          src={item.img}
          sx={{ marginLeft: '2px', width: '36px', color: 'gray' }}
        />
        <Box>
          <Typography>
            {item.name}{' '}
            <Box
              component="img"
              src="/assets/icons/nefture/ic_check_green.svg"
              display={'inline'}
            />
          </Typography>
          <Typography variant="caption">Amount {item.amount}</Typography>
        </Box>
      </Stack>
      <Box sx={{ color: '#FF4601' }}>
        <Typography fontSize={'14px'}>Caption Withdraw</Typography>
        <Typography fontSize={'14px'}>all tokens</Typography>
      </Box>
    </Stack>
  );
}
