import { Box, Card, Collapse, Stack, Typography } from '@mui/material';
import { useState } from 'react';

import Alert from '@components/icons/Alert';
import Down from '@components/icons/Down';
import { Risk, Transaction } from '../types';

type Props = {
  data: any | Transaction;
};

export default function CriticalRisks({ data }: Props) {
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
    <Card>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
        sx={{ padding: '10px', cursor: 'pointer' }}
        onClick={changeOpen}
      >
        <Stack direction="row" spacing={1} justifyContent="space-between" alignItems="center">
          <Alert />
          <Typography sx={{ color: 'critical.main' }}>Critical Risks</Typography>
        </Stack>
        <Box sx={{ transform: rotate }}>
          <Down />
        </Box>
      </Stack>

      <Collapse in={open} unmountOnExit>
        {data.critical_risks &&
          data.critical_risks.map((item: Risk, index: number) => (
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
                      {data.critical_risks[index].description}
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Card>
          ))}
      </Collapse>
    </Card>
  );
}
