import React from 'react';
import { Chip, Avatar, ChipProps } from '@mui/material';

interface Props extends ChipProps {
  code: string;
}

export default function CountryChip({ code, ...props }: Props) {
  return (
    <Chip avatar={<Avatar alt={code} src={`/assets/icons/countries/${code}.svg`} />} {...props} />
  );
}
