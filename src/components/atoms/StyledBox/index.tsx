import React from 'react';
import { Box, Stack, SxProps, Typography } from '@mui/material';
import { Theme } from '@mui/material/styles';

export type Props<T extends object = Theme> = {
  children: React.ReactNode;
  sx?: SxProps<T>;
};

export default function StyledBox({ children, sx }: Props) {
  return (
    <Box
      sx={{
        padding: '16px',
        border: '1px solid #EEEDF2',
        boxShadow: '0px 2px 4px rgba(22, 19, 47, 0.06)',
        borderRadius: '8px',
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
