import React, { useMemo } from 'react';
import { useTheme } from '@mui/material/styles';
import { Chip } from '@mui/material';

import { TestStatus } from '../types';

type Props = {
  status: TestStatus;
};

const getStatusName = (status: TestStatus) => {
  switch (status) {
    case TestStatus.SCHEDULED:
      return 'Scheduled';
    case TestStatus.TESTED:
      return 'Tested';
    case TestStatus.TESTING:
      return 'Testing';
  }
  return '';
};

export default function TestStatusChip({ status }: Props) {
  const theme = useTheme();

  const styles = useMemo(
    () => ({
      [TestStatus.SCHEDULED]: {
        bgcolor: theme.palette.grey[100],
      },
      [TestStatus.TESTING]: {
        bgcolor: theme.palette.error.lighter,
        color: theme.palette.error.main,
      },
      [TestStatus.TESTED]: {
        bgcolor: theme.palette.success.lighter,
        color: theme.palette.success.main,
      },
    }),
    [theme]
  );

  return (
    <Chip
      label={<strong>{getStatusName(status)}</strong>}
      sx={{
        ...styles[status],
        borderRadius: 1,
        cursor: 'pointer',
      }}
    />
  );
}
