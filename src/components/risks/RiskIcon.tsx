import React from 'react';

import DangerIcon from '@components/icons/RiskDanger';
import WarningIcon from '@components/icons/RiskWarning';
import CarefulIcon from '@components/icons/RiskCareful';

import { RiskType } from './types';

const RiskIcons: Record<RiskType, React.ReactElement> = {
  low: <CarefulIcon />,
  medium: <CarefulIcon />,
  high: <WarningIcon />,
  critical: <DangerIcon />,
};

type Props = {
  variant: RiskType;
};

export default function RiskIcon({ variant }: Props) {
  return RiskIcons[variant];
}
