import React from 'react';
import { Chip } from '@mui/material';

import Critical from '@components/icons/Critical';

export default function CriticalChip() {
  return (
    <Chip
      avatar={<Critical />}
      label={`critical`}
      sx={{ bgcolor: 'critical.main', padding: '8px', height: '40px', borderRadius: '20px' }}
    />
  );
}
