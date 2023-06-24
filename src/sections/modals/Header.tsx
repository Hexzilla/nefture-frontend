import { Box, Stack, Typography } from '@mui/material';

import CloseIcon from '@components/icons/GrayClose';
import TransactionIcon from '@components/icons/Transaction';
import TransactionGray from '@components/icons/TransactionGray';

type Props = {
  title: string;
  middle?: React.ReactNode;
  wallet: string;
  onClose: VoidFunction;
};

export default function ModalHeader({ title, middle, wallet, onClose }: Props) {
  return (
    <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between">
      <Stack direction="row" alignItems="center" spacing={1} sx={{ marginLeft: '-10px' }}>
        {title != 'Transaction rejected' ? <TransactionIcon /> : <TransactionGray />}
        <Typography>{title}</Typography>
      </Stack>

      {middle}

      <Stack direction="row" spacing={2} alignItems="center">
        <Typography>{wallet}</Typography>
        <Box sx={{ cursor: 'pointer' }} onClick={onClose}>
          <CloseIcon />
        </Box>
      </Stack>
    </Stack>
  );
}
