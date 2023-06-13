// @mui
import { Box, Typography, Stack } from '@mui/material';
import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function SettingBillingCard() {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', right: 0, zIndex: -1 }}>
        <img alt="bg" src="/assets/icons/setting/setting_billing_card_bg.svg" />
      </div>
      <Box
        sx={{
          bgcolor: (theme) => alpha(theme.palette.primary.main, 0.8),
          borderRadius: '8px',
          height: '144px',
        }}
      >
        <Stack direction="column" justifyContent="space-between" height="100%" padding="16px">
          <Stack direction="row" justifyContent="space-between" alignItems="flex-start" spacing={3}>
            <Box
              component="img"
              src="/assets/icons/setting/setting_billing_chip.svg"
              sx={{
                width: '31.5px',
                height: '23.65px',
              }}
            />
            <Stack direction="column" gap="4px">
              <Typography variant="overline" sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                CARD HOLDER
              </Typography>
              <Typography variant="body2" color="white" fontWeight="medium">
                Luke Dalton
              </Typography>
            </Stack>
          </Stack>

          <Stack direction="row" justifyContent="space-between" alignItems="flex-start" spacing={3}>
            <Stack direction="column" gap="4px">
              <Typography variant="overline" sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                CARD NUMBER
              </Typography>
              <Typography variant="body2" color="white" fontWeight="medium">
                **** **** **** 1234
              </Typography>
            </Stack>
            <Stack direction="column" gap="4px">
              <Typography variant="overline" sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                EXP DATE
              </Typography>
              <Typography variant="body2" color="white" fontWeight="medium">
                03/28
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
}
