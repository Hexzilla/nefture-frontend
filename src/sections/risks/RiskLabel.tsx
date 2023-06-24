import { Card, Stack, Typography } from '@mui/material';
import React, { useMemo } from 'react';

import DangerIcon from '@components/icons/RiskDanger';
import WarningIcon from '@components/icons/RiskWarning';
import CarefulIcon from '@components/icons/RiskCareful';

type Props = {
  variant: 'careful' | 'warning' | 'danger';
  description: string;
};

export default function RiskLabel({ variant, description }: Props) {
  const title = useMemo(() => {
    return variant[0].toUpperCase() + variant.slice(1);
  }, [variant]);

  return (
    <Card sx={{ padding: '10px' }}>
      <Stack
        direction="row"
        spacing="10px"
        alignItems="center"
        sx={{ width: '100%' }}
      >
        {RiskIcons[variant]}
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

const RiskIcons: Record<string, React.ReactElement> = {
  careful: <CarefulIcon />,
  danger: <DangerIcon />,
  warning: <WarningIcon />,
};
