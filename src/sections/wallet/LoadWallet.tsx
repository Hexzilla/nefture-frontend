import { Box, Stack, Typography } from '@mui/material';

import getVariant from '@sections/_examples/extra/animate/getVariant';
import { m } from 'framer-motion';

type Props = {
  loadingStatus:number;
  updateLoadingStatus : VoidFunction; 
};

export default function LoadWallet({loadingStatus, updateLoadingStatus}: Props) {

  return (
    <Stack position={'relative'} alignItems={'center'}>
      <Box
        component={m.div}
        {...(loadingStatus == 3 && getVariant('color8x'))}
        sx={{
          height: '240px',
          width: '240px',
          borderRadius: '50%',
          backgroundColor: 'rgba(41, 101, 255, 0.2)',
        }}
      />
      <Box
        component={m.div}
        {...(loadingStatus == 3 && getVariant('color7x'))}
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
        {...(loadingStatus == 3 && getVariant('color6x'))}
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
        onClick={updateLoadingStatus}
      />
      {(loadingStatus == 1 || loadingStatus == 2) && (
        <Typography
          onClick={updateLoadingStatus}
          sx={{ cursor: 'pointer', top: '115px' }}
          position={'absolute'}
        >
          {loadingStatus == 1 && 'Launch Check'}
          {loadingStatus == 2 && 'Scanning...'}
        </Typography>
      )}
      {(loadingStatus == 3 || loadingStatus == 4) && (
        <>
          <Typography
            onClick={updateLoadingStatus}
            sx={{ cursor: 'pointer', top: '105px' }}
            position={'absolute'}
          >
            {loadingStatus == 3 && 'Anaylzing'}
            {loadingStatus == 4 && 'A little'}
          </Typography>
          <Typography
            onClick={updateLoadingStatus}
            sx={{ cursor: 'pointer', top: '125px' }}
            position={'absolute'}
          >
            {loadingStatus == 3 && 'threads'}
            {loadingStatus == 4 && 'more paitience'}
          </Typography>
        </>
      )}
    </Stack>
  );
}
