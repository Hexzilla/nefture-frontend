import { Box, Button, Card } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Stack } from '@mui/system';

import Iconify from '@components/iconify/Iconify';

const UserName = styled('div')`
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
`;

export default function SettingsProfile() {
  return (
    <Card sx={{ padding: '31px' }}>
      <Stack direction="row" justifyContent="space-between">
        <Stack direction="row" sx={{ gap: '8px' }}>
          <Box
            component="img"
            src="https://api-dev-minimal-v4.vercel.app/assets/images/avatars/avatar_default.jpg"
            sx={{ height: '80px', width: '80px', borderRadius: '2000px' }}
          />
          <Stack direction="column" justifyContent="space-between" sx={{ padding: '8px' }}>
            <UserName>Luke Dalton</UserName>
            <Stack direction="row" alignItems="center" sx={{ gap: '6px' }}>
              <Iconify icon="eva:calendar-outline" width={21} />
              Joined March 1st 2023
            </Stack>
          </Stack>
        </Stack>
        <Stack direction="row" alignItems="center" sx={{ gap: '4px' }}>
          <Button
            startIcon={
              <Box
                component="img"
                src="/assets/icons/setting/setting_account_plan.svg"
                sx={{ width: '21px', height: '21px' }}
              />
            }
            sx={{ fontSize: 'body1', fontWeight: 'medium' }}
          >
            Professional Plan
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
}
