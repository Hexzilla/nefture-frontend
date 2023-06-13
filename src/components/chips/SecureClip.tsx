import React from 'react';
import { Chip } from '@mui/material';

import Secure from '@components/icons/Secure';

export default function SecureClip() {
  return (
    <Chip
      avatar={<Secure />}
      label={`secure`}
      sx={{
        bgcolor: 'white',
        padding: '8px',
        height: '40px',
        borderRadius: '20px',
        color: '#2965FF',
      }}
    />
  );
}
