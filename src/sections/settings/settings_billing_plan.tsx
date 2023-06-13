// @mui
import { Box, Grid, Card, Button, Typography, Stack } from '@mui/material';

// ----------------------------------------------------------------------

export default function SettingBillingPlan() {
  return (
    <Card sx={{ p: 3 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={3}>
        <Typography variant="body1" color="grey.900" fontWeight="bold">
          Plan details
        </Typography>
      </Stack>

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={3}
        sx={{ mt: 4 }}
      >
        <Typography variant="body1" color="grey.700">
          Plan details
        </Typography>
        <Typography variant="body1" color="grey.900" fontWeight="medium">
          #16132F
        </Typography>
      </Stack>

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={3}
        sx={{ mt: 3 }}
      >
        <Typography variant="body1" color="grey.700">
          Next billing
        </Typography>
        <Typography variant="body1" color="grey.900" fontWeight="medium">
          28/03/2023
        </Typography>
      </Stack>

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={3}
        sx={{ mt: 3 }}
      >
        <Typography variant="body1" color="grey.700">
          Next billing amount
        </Typography>
        <Typography variant="body1" color="grey.900" fontWeight="medium">
          £49.00
        </Typography>
      </Stack>

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={3}
        sx={{ mt: 3 }}
      >
        <Typography variant="body1" color="grey.700">
          Frequency
        </Typography>
        <Typography variant="body1" color="grey.900" fontWeight="medium">
          Monthly
        </Typography>
      </Stack>
    </Card>
  );
}
