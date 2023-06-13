import React from 'react';
import { Button, ButtonProps } from '@mui/material';
import Iconify from '@components/iconify/Iconify';

export default function SerachButton({ sx, children, ...props }: ButtonProps) {
  return (
    <Button
      variant="outlined"
      startIcon={<Iconify icon="eva:search-outline" width={20} />}
      sx={{ color: 'black', ...sx }}
      {...props}
    >
      {children}
    </Button>
  );
}
