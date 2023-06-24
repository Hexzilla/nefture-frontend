import { Box, Button, Card, CircularProgress, Stack, Typography, Link } from '@mui/material';

import ReloadGray from '@components/icons/ReloadGray';
import SvgColor from '@components/svg-color/SvgColor';
import { Wallet } from '@components/wallet/types';

type Props = {
  activeWallet: Wallet;
  onRefresh: VoidFunction;
};

export default function WalletStatus({ activeWallet, onRefresh }: Props) {
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
  const zones = ['risky', 'medium', 'safe'];

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

      <Stack direction="row" alignItems="center" spacing="7px" mt="16px">
        <Typography
          variant="body1"
          sx={{
            color: `${COLORS[activeWallet.status - 1]}.main`,
            textAlign: 'center',
            fontWeight: 700,
          }}
        >
          {activeWallet.statusTitle}
        </Typography>
        <Box component="div" pt="4px" sx={{ cursor: 'pointer' }} onClick={onRefresh}>
          <ReloadGray />
        </Box>
      </Stack>

      <Typography sx={{ color: 'gray', textAlign: 'center', marginTop: '1em' }}>
        Your wallet health is in the{' '}
        <span style={{ color: textColors[activeWallet.status - 1] }}>
          {zones[activeWallet.status - 1]} zone
        </span>
      </Typography>

      <Card
        sx={{
          cursor: 'pointer',
          marginTop: '1em',
          width: '50%',
          backgroundColor: 'primary.buttonColor',
        }}
      >
        <Link href={'twitter-share'} sx={{ color: 'white', '&:hover': { textDecoration: 'none' } }}>
          <Typography sx={{ textAlign: 'center', marginTop: '0.5em', marginBottom: '0.5em' }}>
            Share On{' '}
            <SvgColor
              src="/assets/icons/apps/ic_twitter.svg"
              sx={{ marginBottom: '-0.4em', width: '16px' }}
            />
          </Typography>
        </Link>
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
          We found{' '}
          <span style={{ color: textColors[activeWallet.status - 1] }}>
            {activeWallet.approvals} approvals
          </span>{' '}
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
