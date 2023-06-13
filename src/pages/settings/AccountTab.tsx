import { Grid } from '@mui/material';

import SettingsProfile from '@sections/settings/settings_profile';
import SettingsPersonalInformation from '@sections/settings/settings_personal_information';
import SettingsAccountSettings from '@sections/settings/settings_account_settings';
import SettingsConnectShopify from '@sections/settings/settings_connect_shopify';

export default function AccountTab() {
  return (
    <>
      <Grid container mt={4}>
        <Grid item xs={12}>
          <SettingsProfile />
        </Grid>
      </Grid>
      <Grid container spacing={3} mt={1}>
        <Grid item xs={12} sm={6}>
          <SettingsPersonalInformation />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SettingsAccountSettings />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SettingsConnectShopify />
        </Grid>
      </Grid>
    </>
  );
}
