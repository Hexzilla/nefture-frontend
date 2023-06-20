import { Box, Button, Paper, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';

import HelpItem from './HelpItem';
import { m } from 'framer-motion';
import getVariant from '@sections/_examples/extra/animate/getVariant';

type Props = {};

export default function LoadWallet({}: Props) {
  const [open, setOpen] = useState(false);
  const [display, setDisplay] = useState('flex');

  return (
    <Stack position={'relative'} alignItems={'center'}>
      <Box
        component={m.div}
        // {...getVariant('color2x')}
        sx={{
          height: '200px',
          width: '200px',
          borderRadius: '50%',
          backgroundColor: 'rgba(41, 101, 255, 0.2)',
        }}
      />
      <Box
        component={m.div}
        // {...getVariant('color4x')}
        sx={{
          height: '150px',
          width: '150px',
          borderRadius: '50%',
          top: '25px',
          backgroundColor: 'rgba(41, 101, 255, 0.6)',
          boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        }}
        position={'absolute'}
      />
      <Box
        component={m.div}
        // {...getVariant('color5x')}
        sx={{
          height: '100px',
          width: '100px',
          borderRadius: '50%',
          top: '50px',
          backgroundColor: 'rgba(41, 101, 255)',
          boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        }}
        position={'absolute'}
      />
    </Stack>
  );
}
