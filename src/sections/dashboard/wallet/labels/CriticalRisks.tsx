import { Card, Collapse, Stack, Typography } from '@mui/material';
import { useState } from 'react';

import Alert from '@components/icons/Alert';

import { Risk } from './types';
import Risks from './Risks';

type Props = {
  risks?: Risk[] | null;
};

export default function CriticalRisks({ risks }: Props) {
  const [open, setOpen] = useState(false);
  const [display, setDisplay] = useState('flex');
  const [rotate, setRotate] = useState('rotate(180deg)');

  const changeOpen = () => {
    setOpen(!open);
    if (display === 'flex') setDisplay('none');
    else setDisplay('flex');
    if (!open) setRotate('rotate(0deg)');
    else setRotate('rotate(180deg)');
  };

  return (
    <Risks
      title="Critical Risks"
      subtitle="3 risks identified"
      color="critical.main"
      onClick={changeOpen}
    >
      <Collapse in={open} unmountOnExit>
        {(risks || []).map((item: Risk, index: number) => (
          <Card sx={{ margin: '16px 30px' }} key={index}>
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              justifyContent="space-between"
              sx={{ padding: '8px' }}
            >
              <Stack direction="row" spacing={3} alignItems="center" sx={{ width: '100%' }}>
                <Alert />
                <Stack
                  direction="column"
                  spacing={1}
                  sx={{ width: `calc(100% - 48px)`, marginLeft: '12px!important' }}
                >
                  <Typography>Danger</Typography>
                  <Typography color="grey" sx={{ overflowWrap: 'break-word' }}>
                    {item.description}
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Card>
        ))}
      </Collapse>
    </Risks>
  );
}
