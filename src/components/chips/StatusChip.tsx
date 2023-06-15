import React from 'react';
import { Chip } from '@mui/material';
import Critical from '@components/icons/Critical';
import Warning from '@components/icons/Warning';
import Secure from '@components/icons/Secure';

type Props = {
  status: number;
};

export default function StatusChip({ status }: Props) {
  const sx = {
    padding: '8px',
    height: '40px',
    borderRadius: '20px',
    color: 'white',
  };

  if (status === 1) {
    return <Chip avatar={<Critical />} label="critical" sx={{ ...sx, bgcolor: 'critical.main' }} />;
  }
  if (status === 2) {
    return <Chip avatar={<Warning />} label="warning" sx={{ ...sx, bgcolor: 'warning.main' }} />;
  }
  if (status === 3) {
    return (
      <Chip avatar={<Secure />} label="secure" sx={{ ...sx, bgcolor: 'white', color: '#2965FF' }} />
    );
  }

  return <></>;
}
