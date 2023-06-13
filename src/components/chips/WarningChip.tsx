import React from 'react';
import { Chip } from '@mui/material';

import Warning from '@components/icons/Warning';

export default function WarningChip() {
  return (
    <Chip
      avatar={<Warning />}
      label={`warning`}
      sx={{ bgcolor: 'warning.main', padding: '8px', height: '40px', borderRadius: '20px' }}
    />
  );
}
