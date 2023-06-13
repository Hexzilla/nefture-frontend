import React from 'react';
import { m } from 'framer-motion';
import { Box } from '@mui/material';

import { MotionViewport, varFade } from '@components/animate';

type Props = {
  children: React.ReactNode;
};

export default function AnimatedContainer({ children }: Props) {
  return (
    <Box component={MotionViewport} sx={{ position: 'relative' }}>
      <m.div variants={varFade().in}>{children}</m.div>
    </Box>
  );
}
