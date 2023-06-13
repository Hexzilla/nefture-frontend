import React, { useMemo } from 'react';
import { useTheme } from '@mui/material/styles';
import { Chip } from '@mui/material';

import { ProductStatus } from '../types';

type Props = {
  status: ProductStatus;
  label: string;
};

export default function StatusChip({ status, label }: Props) {
  const theme = useTheme();

  const styles = useMemo(
    () => ({
      [ProductStatus.EMPTY]: {
        bgcolor: theme.palette.grey[100],
      },
      [ProductStatus.PROGRESS]: {
        bgcolor: theme.palette.error.lighter,
        color: theme.palette.error.main,
      },
      [ProductStatus.READY]: {
        bgcolor: theme.palette.success.lighter,
        color: theme.palette.success.main,
      },
    }),
    [theme]
  );

  return (
    <Chip
      label={<strong>{label}</strong>}
      sx={{
        ...styles[status],
        borderRadius: 1,
        cursor: 'pointer',
      }}
    />
  );
}
