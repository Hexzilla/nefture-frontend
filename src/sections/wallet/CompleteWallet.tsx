import { Box, Button, Card, CircularProgress, Stack, Typography } from '@mui/material';

import ReloadGray from '@components/icons/ReloadGray';
import SvgColor from '@components/svg-color/SvgColor';
import { Wallet } from '@components/wallet/types';

type Props = {
  activeWallet: Wallet;
};

export default function CompleteWallet({ activeWallet }: Props) {
  const circleStyle = {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'gray',
    borderRadius: '50%',
    height: '120px',
    width: '120px',
    backgroundColor: '#3f3f3f',
    position: 'relative',
  };

  const COLORS = ['error', 'warning', 'success'] as const;
  const textColors = ['#FF5630', '#FE8900', '#36B37E'];

  return (
    <>
      <Stack position={'relative'} alignItems={'center'}>
        <Box sx={circleStyle}>
          <CircularProgress
            variant="determinate"
            value={95}
            size={118}
            color={COLORS[activeWallet.status - 1]}
          />
          <Typography
            sx={{ position: 'absolute', top: 'calc(50% - 20px)', left: '22%', fontSize: ' 36px' }}
          >
            97%
          </Typography>
        </Box>
      </Stack>
      <Typography
        sx={{
          color: `${COLORS[activeWallet.status - 1]}.main`,
          textAlign: 'center',
          marginTop: '1em',
        }}
      >
        {activeWallet.statusTitle} <ReloadGray />
      </Typography>
      <Typography sx={{ color: 'gray', textAlign: 'center', marginTop: '1em' }}>
        Your wallet health is in the{' '}
        <span style={{ color: textColors[activeWallet.status - 1] }}>safe zone</span>
      </Typography>
      <Card
        sx={{
          cursor: 'pointer',
          marginTop: '1em',
          marginLeft: '5em',
          marginRight: '5em',
          backgroundColor: 'primary.buttonColor',
        }}
      >
        <Typography sx={{ textAlign: 'center', marginTop: '0.5em', marginBottom: '0.5em' }}>
          Share On{' '}
          <SvgColor
            src="/assets/icons/apps/ic_twitter.svg"
            sx={{ marginBottom: '-0.4em', width: '16px' }}
          />
        </Typography>
      </Card>
      <Card
        sx={{
          marginTop: '1em',
          alignItems: 'center',
          textAlign: 'center',
          padding: '1em',
          borderRadius: '8px',
        }}
      >
        <Typography sx={{ textAlign: 'center', marginTop: '1em' }}>
          We found <span style={{ color: textColors[activeWallet.status - 1] }}>0 approvals</span>{' '}
          on your wallet
        </Typography>
        <Button
          variant="contained"
          sx={{ margin: '1em', '&:hover': { backgroundColor: 'primary.main' } }}
        >
          Receive your wallet audit
        </Button>
      </Card>
    </>
  );
}
