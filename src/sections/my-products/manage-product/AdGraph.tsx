import { Box, Button, Card, Stack, Typography } from '@mui/material';
import React from 'react';

import Chart, { useChart } from '@components/chart';
import CalendarDate from '@components/icons/CalendarDate';

export default function RevenueGraph() {
  const { series } = chart;

  const chartOptions = useChart({
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    yaxis: {
      labels: {
        formatter: (val: number, opts?: any): string | string[] => {
          let label = '';
          if (val >= 1000) {
            label = (val / 1000).toFixed(1);
          } else {
            label = val.toString();
          }
          return label;
        },
      },
    },
  });

  return (
    <Card sx={{ padding: '24px' }}>
      <Stack direction="row" justifyContent="space-between" alignItems="end">
        <Stack spacing={1}>
          <Typography style={{ fontSize: '30px' }}>Active ads</Typography>
          <Typography>Lorem ipsum dolor sit amet consectetur</Typography>
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
        { name: '', data: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110] },
      ],
    },
  ],
};
