import React from 'react';
import { Chip } from '@mui/material';
import Critical from '@components/icons/Critical';
import Warning from '@components/icons/Warning';
import Secure from '@components/icons/Secure';

type Props = {
  status: 'critical' | 'warning' | 'secure';
};

const Config = {
  critical: {
    avatar: <Critical />,
    bgcolor: 'critical.main',
    color: 'white',
  },
  warning: {
    avatar: <Warning />,
    bgcolor: 'warning.main',
    color: 'white',
  },
  secure: {
    avatar: <Secure />,
    bgcolor: 'white',
    color: '#2965FF',
  },
};

export default function StatusChip({ status }: Props) {
  const config = Config[status];

  return (
    <Chip
      avatar={config.avatar}
      label={status}
      sx={{
        padding: '8px',
        height: '40px',
        borderRadius: '20px',
        bgcolor: config.bgcolor,
        color: config.color,
      }}
    />
  );
}
