import { Box, Stack, Typography, Switch } from '@mui/material';
import SettingsPlan from '@sections/settings/settings_plan';
import { _settingPricingPlans } from '../../_mock/arrays';

export default function PlanTab() {
  return (
    <Box>
      <Box sx={{ my: 3 }}>
        <Stack direction="row" alignItems="center" justifyContent="flex-end">
          <Typography variant="body1" sx={{ mr: 1.5 }}>
            MONTHLY
          </Typography>

          <Switch sx={{ color: 'primary' }} />
          <Stack spacing={2} direction="row" alignItems="center" justifyContent="center">
            <Box>
              <Typography variant="body1" color="grey.700" sx={{ ml: 1.5 }}>
                YEARLY
              </Typography>
            </Box>

            <Box
              sx={{
                backgroundColor: 'primary.lighter',
                borderRadius: '2000px',
                m: 0,
                px: 1,
                py: 0.5,
              }}
            >
              <Typography variant="caption" fontWeight="medium" color="grey.900">
                save 30%
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Box>
      <Box
        gap={3}
        display="grid"
        gridTemplateColumns={{ md: 'repeat(3, 1fr)' }}
        sx={{ alignItems: 'flex-end' }}
      >
        {_settingPricingPlans.map((card, index) => (
          <SettingsPlan key={card.subscription} card={card} index={index} />
        ))}
      </Box>
    </Box>
  );
}
