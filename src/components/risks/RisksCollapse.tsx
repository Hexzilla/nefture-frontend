import { Box, Card, Collapse, Stack, Typography } from '@mui/material';
import { useMemo, useState } from 'react';

import Alert from '@components/icons/Alert';
import DownIcon from '@components/icons/Down';

import { Risk, RiskType } from './types';
import RiskItem from './RiskItem';

type Props = {
  risks?: Risk[] | null;
  variant: RiskType;
  description?: string;
  collapsed?: boolean;
  setCollapsed?: (value: boolean) => void;
};

export default function RisksCollapse({
  risks,
  variant,
  description,
  collapsed,
  setCollapsed,
}: Props) {
  const title = useMemo(() => {
    return variant[0].toUpperCase() + variant.slice(1) + ' Risks';
  }, [variant]);

  const subtitle = useMemo(() => {
    if (description) {
      return description;
    }
    return risks ? `${risks.length} risks detected` : '';
  }, [risks, description]);

  return (
    <Card sx={{ marginTop: collapsed ? '32px' : 0 }}>
      <Stack
        direction="row"
        spacing={2}
        alignItems="start"
        justifyContent="space-between"
        sx={{ padding: '10px', cursor: 'pointer' }}
        onClick={() => setCollapsed?.(!collapsed)}
      >
        <Stack direction="row" spacing={1} justifyContent="space-between" alignItems="start">
          <Alert />
          <div>
            <Typography color={`risk.color.${variant}`}>{title}</Typography>
            <Typography variant="body1" color="grey">
              {subtitle}
            </Typography>
          </div>
        </Stack>
        <Box sx={{ transform: 'rotate(180deg)' }} display="flex" alignItems="start">
          <DownIcon />
        </Box>
      </Stack>

      <Collapse in={collapsed} unmountOnExit>
        <Stack spacing="10px" m="16px">
          {(risks || []).map((item: Risk, index: number) => (
            <RiskItem
              key={index}
              title="Danger"
              variant="critical"
              description={item.description}
            />
          ))}
        </Stack>
      </Collapse>
    </Card>
  );
}
