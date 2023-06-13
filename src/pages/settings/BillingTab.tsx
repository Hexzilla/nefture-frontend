// @mui
import { Box, Grid } from '@mui/material';

// components
import SettingBillingPlan from '../../sections/settings/settings_billing_plan';
import SettingBillingPayment from '../../sections/settings/settings_billing_payment';
import SettingBillingAddress from '../../sections/settings/settings_billing_address';
import SettingBillingCompany from '../../sections/settings/settings_billing_company';
// ----------------------------------------------------------------------

export default function BillingTab() {
  return (
    <Box sx={{ mt: 1 }}>
      <Grid container spacing={5} sx={{ mt: 1 }}>
        <Grid item xs={12} md={6}>
          <SettingBillingPlan />
        </Grid>

        <Grid item xs={12} md={6}>
          <SettingBillingPayment />
        </Grid>

        <Grid item xs={12} md={6}>
          <SettingBillingAddress />
        </Grid>

        <Grid item xs={12} md={6}>
          <SettingBillingCompany />
        </Grid>
      </Grid>
    </Box>
  );
}
