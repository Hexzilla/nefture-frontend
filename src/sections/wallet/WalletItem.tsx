import { Box, Card, CircularProgress, Stack, Typography } from '@mui/material';

import EthereumIcon from '@components/icons/EthereumIcon';
import PencilGray from '@components/icons/PencilGray';
import AlertItem from './AlertItem';
import { WalletStatus } from './types';
import useResponsive from '@hooks/useResponsive';

const SHOW_TRANSACTIONS = 4;

type Props = {
  item: WalletStatus;
  alertVisibility: boolean;
  onClick: VoidFunction;
};

export default function WalletItem({ item, alertVisibility, onClick }: Props) {
  const isMobile = useResponsive('down', 'sm');
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
          <Stack direction="column">
            <Typography>Cactus</Typography>
            {isMobile&&<Typography color={'gray'} fontSize={'12px'}>0xebC73...8D0B2</Typography>}
          </Stack>
          {!isMobile && <PencilGray />}
        </Stack>
        {!isMobile && (
          <Stack direction="row" spacing={2} alignItems={'center'}>
            <Typography>0xebC73...8D0B2</Typography>
          </Stack>
        )}
        <Stack
          direction="row"
          justifyContent="space-between"
          spacing={2}
          style={{ minWidth: '140px' }}
          alignItems={'center'}
          onClick={onClick}
        >
          {item.status == 0 && (
            <Card>
              <Typography m={1.5}>Launch Check</Typography>
            </Card>
          )}
          {item.status != 0 && (
            <>
              <Typography sx={{ color: `${COLORS[item.status - 1]}.main` }}>
                {item.statusTitle}
              </Typography>
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
        {alertVisibility && !isMobile && (
          <>
            <AlertItem title="Weekly Reports" />
            <AlertItem title="Real-time Alerts" />
          </>
        )}
        {!isMobile && (
          <Stack direction="row" spacing={2} alignItems={'center'}>
            <Card sx={{ borderColor: 'primary.main' }}>
              <Typography m={1.5}>Wallet 1</Typography>
            </Card>
          </Stack>
        )}
      </Stack>
    </Card>
  );
}
