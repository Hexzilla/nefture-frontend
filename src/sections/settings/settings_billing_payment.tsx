// @mui
import { Box, Card, Button, Typography, Stack, Grid } from '@mui/material';
import SettingBillingCard from './settings_billing_card';

// ----------------------------------------------------------------------

export default function SettingBillingPayment() {
  return (
    <Card sx={{ p: 3 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={3}>
        <Typography variant="body1" color="grey.900" fontWeight="bold">
          Payment method
        </Typography>
      </Stack>

      <Grid container spacing={3} mt={2}>
        <Grid item xs={12} sm={7}>
          <SettingBillingCard />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            sx={{
              height: '100%',
              border: '1px dashed #6B55FD',
              background: '#F4F2FF',
              gap: '10px',
            }}
          >
            <img alt="replicate" src="/assets/icons/setting/replicate.svg" />
            <Typography variant="body2" color="primary.main" fontWeight="bold">
              Replace
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Card>
  );
}
