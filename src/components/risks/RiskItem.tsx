import { Card, Stack, Typography } from '@mui/material';
import React, { useMemo } from 'react';

import { RiskType } from './types';
import RiskIcon from './RiskIcon';

type Props = {
  title: string;
  variant: RiskType;
  description: string;
};

export default function RiskItem({ title, variant, description }: Props) {
  return (
    <Card sx={{ padding: '10px' }}>
      <Stack direction="row" spacing="10px" alignItems="center" sx={{ width: '100%' }}>
        <RiskIcon variant={variant} />

        <Stack direction="column" spacing={1}>
          <Typography>{title}</Typography>
          <Typography color="grey" sx={{ overflowWrap: 'break-word' }}>
            {description}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
