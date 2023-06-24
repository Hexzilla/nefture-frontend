import { Box, Card, Collapse, Stack, Typography } from '@mui/material';
import { useMemo, useState } from 'react';

import Alert from '@components/icons/Alert';
import DownIcon from '@components/icons/Down';

import { Risk, RiskType } from './types';
import RiskLabel from './RiskLabel';

type Props = {
  risks?: Risk[] | null;
  variant: RiskType;
  description?: string;
};

export default function RisksCollapse({ risks, variant, description }: Props) {
  const [open, setOpen] = useState(false);

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
    <Card>
      <Stack
        direction="row"
        spacing={2}
        alignItems="start"
        justifyContent="space-between"
        sx={{ padding: '10px', cursor: 'pointer' }}
        onClick={() => setOpen((open) => !open)}
      >
        <Stack direction="row" spacing={1} justifyContent="space-between" alignItems="start">
          <Alert />
          <div>
            <Typography color={`risk.${variant}`}>{title}</Typography>
            <Typography variant="caption" color="grey">
              {subtitle}
            </Typography>
          </div>
        </Stack>
        <Box sx={{ transform: 'rotate(180deg)' }} display="flex" alignItems="start">
          <DownIcon />
        </Box>
      </Stack>

      <Collapse in={open} unmountOnExit>
        <Stack spacing="10px" m="16px">
          {(risks || []).map((item: Risk, index: number) => (
            <RiskLabel key={index} variant="danger" description={item.description} />
          ))}
        </Stack>
      </Collapse>
    </Card>
  );
}
