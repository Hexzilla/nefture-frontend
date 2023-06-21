import { Box, Card, CircularProgress, Stack, Typography } from '@mui/material';

import EthereumIcon from '@components/icons/EthereumIcon';
import PencilGray from '@components/icons/PencilGray';
import AlertItem from './AlertItem';
import { WalletStatus } from './types';

const SHOW_TRANSACTIONS = 4;

type Props = {
  item: WalletStatus;
  alertVisibility: boolean;
};

export default function WalletItem({ item, alertVisibility }: Props) {
  const styles = {
    '&:hover': {
      backgroundColor: 'rgba(145,158,171,0.08)',
    },
  };

  const circleStyle = {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'gray',
    borderRadius: '50%',
    height: '50px',
    backgroundColor: '#3f3f3f',
    position: 'relative',
  };
  const COLORS = ['error', 'warning', 'success'] as const;

  return (
    <Card sx={styles}>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
        sx={{ padding: '10px 20px', cursor: 'pointer' }}
      >
        <Stack direction="row" spacing={2} alignItems={'center'}>
          <EthereumIcon />
          <Typography>Cactus</Typography>
          <PencilGray />
        </Stack>
        <Stack direction="row" spacing={2} alignItems={'center'}>
          <Typography>0xebC73...8D0B2</Typography>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          spacing={2}
          style={{ minWidth: '140px' }}
          alignItems={'center'}
        >
          {item.status == 0 && (
            <Card>
              <Typography m={1.5}>Launch Check</Typography>
            </Card>
          )}
          {item.status != 0 && (
            <>
              <Typography  sx={{ color: `${COLORS[item.status - 1]}.main` }}>{item.statusTitle}</Typography>
              <Box sx={circleStyle}>
                <CircularProgress
                  color={COLORS[item.status - 1]}
                  variant="determinate"
                  value={95}
                  size={48}
                />
                <Typography sx={{ position: 'absolute', top: '30%', left: '31%' }}>97</Typography>
              </Box>
            </>
          )}
        </Stack>
        {alertVisibility && (
          <>
            <AlertItem title="Weekly Reports" />
            <AlertItem title="Real-time Alerts" />
          </>
        )}
        <Stack direction="row" spacing={2} alignItems={'center'}>
          <Card sx={{ borderColor: 'primary.main' }}>
            <Typography m={1.5}>Wallet 1</Typography>
          </Card>
        </Stack>
      </Stack>
    </Card>
  );
}
