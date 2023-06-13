import React from 'react';
import { Chip } from '@mui/material';

export default function ActiveAdsChip({ label }: { label: string }) {
  return (
    <Chip
      avatar={<img alt="Ads" src="/assets/icons/research/ads.svg" width={12} height={12} />}
      label={`Active ads: ${label}`}
    />
  );
}
