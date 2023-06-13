// @mui
import {Card,  Typography, Stack, Button } from '@mui/material';

// ----------------------------------------------------------------------

export default function SettingBillingAddress() {
  return (
    <Card sx={{ p: 3 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={3}>
        <Typography variant="body1" color="grey.900" fontWeight="bold">
          Billing address
        </Typography>
        <Button variant="text" color="primary" sx={{ padding: 0, minWidth: 24 }}>
          Edit
        </Button>
      </Stack>

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={3}
        sx={{ mt: 4 }}
      >
        <Typography variant="body1" color="grey.700">
          First name
        </Typography>
        <Typography variant="body1" color="grey.900" fontWeight="medium">
          Luke
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
          Last name
        </Typography>
        <Typography variant="body1" color="grey.900" fontWeight="medium">
          Dalton
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
          Country
        </Typography>
        <Typography variant="body1" color="grey.900" fontWeight="medium">
          United Kingdom
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
          City
        </Typography>
        <Typography variant="body1" color="grey.900" fontWeight="medium">
          London
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
          Postal code
        </Typography>
        <Typography variant="body1" color="grey.900" fontWeight="medium">
          SE1 7ND
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
          Street/house number
        </Typography>
        <Typography variant="body1" color="grey.900" fontWeight="medium">
          Monthly
        </Typography>
      </Stack>
    </Card>
  );
}
