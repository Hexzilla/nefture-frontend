import { Box, Button, Card, Stack, Typography } from '@mui/material';
import React from 'react';

import Chart, { useChart } from '@components/chart';
import CalendarDate from '@components/icons/CalendarDate';

export default function RevenueGraph() {
  const { series } = chart;

  const chartOptions = useChart({
    yaxis: {
      labels: {
        formatter: (val: number, opts?: any): string | string[] => {
          let label = '';
          if (val >= 1000) {
            label = (val / 1000).toFixed(1) + 'K';
          } else {
            label = val.toString();
          }
          return '£' + label;
        },
      },
    },
  });

  return (
    <Card sx={{ padding: '24px' }}>
      <Stack direction="row" justifyContent="space-between" alignItems="end">
        <Stack spacing={1}>
          <Typography>Total revenue</Typography>
          <Typography style={{ fontSize: '30px' }}>£4,567.88</Typography>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Button color="inherit" variant="outlined" startIcon={<CalendarDate />}>
            Date range
          </Button>
          <Button variant="outlined" startIcon={<CalendarDate />}>
            Start tracking
          </Button>
        </Stack>
      </Stack>

      <Box sx={{ mt: 3, mx: 3 }} dir="ltr">
        <Chart type="line" series={series[0].data} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}

const chart = {
  series: [
    {
      data: [
        { name: '', data: [3200, 3300, 3200, 4200, 3600, 3300, 3250, 4900, 4800, 4600, 4940] },
      ],
    },
  ],
};
