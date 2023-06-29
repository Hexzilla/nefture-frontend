import { useEffect, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { m } from 'framer-motion';

import { useWalletContext } from '@components/wallet';
import getVariant from '@sections/_examples/extra/animate/getVariant';
import WalletStatus from './WalletStatus';

type Props = {
  onLoadingComplete: () => void;
  defaultLoadValue: number;
};

export default function WalletLoader({ onLoadingComplete, defaultLoadValue }: Props) {
  const { activeWallet } = useWalletContext();
  const [loadingStatus, setLoadingStatus] = useState(defaultLoadValue);

  const updateProgress = () => {
    if (loadingStatus >= 4) {
      setLoadingStatus(100);
      onLoadingComplete();
    } else {
      setLoadingStatus((value) => value + 1);
    }
  };

  useEffect(() => {
    if (loadingStatus >= 4) {
      setLoadingStatus(100);
      onLoadingComplete();
    } else {
      const timer = setInterval(() => {
        updateProgress();
      }, 1200);

      return () => clearInterval(timer);
    }
  }, [updateProgress]);

  const variantColors = (variant: string) => {
    if (loadingStatus === 3) {
      return getVariant(variant);
    }
  };

  return (
    <Stack position={'relative'} alignItems={'center'}>
      {loadingStatus < 100 && (
        <>
          <Box
            component={m.div}
            {...variantColors('color8x')}
            sx={{
              height: '240px',
              width: '240px',
              borderRadius: '50%',
              backgroundColor: 'rgba(41, 101, 255, 0.2)',
            }}
          />
          <Box
            component={m.div}
            {...variantColors('color7x')}
            sx={{
              height: '190px',
              width: '190px',
              borderRadius: '50%',
              top: '25px',
              backgroundColor: 'rgba(41, 101, 255, 0.6)',
              boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
            }}
            position={'absolute'}
          />
          <Box
            component={m.div}
            {...variantColors('color6x')}
            sx={{
              height: '140px',
              width: '140px',
              borderRadius: '50%',
              top: '50px',
              backgroundColor: 'rgba(41, 101, 255)',
              boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
              cursor: 'pointer',
            }}
            position={'absolute'}
            onClick={updateProgress}
          />

          {(loadingStatus === 1 || loadingStatus === 2) && (
            <Typography
              onClick={updateProgress}
              sx={{ cursor: 'pointer', top: '115px' }}
              position={'absolute'}
            >
              {loadingStatus === 1 && 'Launch Check'}
              {loadingStatus === 2 && 'Scanning...'}
            </Typography>
          )}
          {(loadingStatus === 3 || loadingStatus === 4) && (
            <>
              <Typography
                onClick={updateProgress}
                sx={{ cursor: 'pointer', top: '105px' }}
                position={'absolute'}
              >
                {loadingStatus === 3 ? 'Anaylzing' : 'A little'}
              </Typography>
              <Typography
                onClick={updateProgress}
                sx={{ cursor: 'pointer', top: '125px' }}
                position={'absolute'}
              >
                {loadingStatus === 3 ? 'threads' : 'more paitience'}
              </Typography>
            </>
          )}
        </>
      )}

      {!!(loadingStatus === 100 && activeWallet) && (
        <WalletStatus activeWallet={activeWallet} onRefresh={() => setLoadingStatus(1)} />
      )}
    </Stack>
  );
}
