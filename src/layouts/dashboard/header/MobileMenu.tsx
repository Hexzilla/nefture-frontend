import React from 'react';
import { Button, Box, Stack, Typography } from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';

const MenuButton = ({ title, icon }: { title: string; icon: string }) => (
  <Button variant="text" sx={{ color: 'white' }}>
    <Stack direction="column" alignItems="center">
      <Box component="img" src={icon} width={24} />
      <Typography variant="caption">{title}</Typography>
    </Stack>
  </Button>
);

export default function MobileMenu() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'sticky',
        bottom: 0,
        background: theme.palette.background.neutral,
        opacity: 1,
        border: '1px solid rgba(255, 255, 255, 0.12)',
        borderRadius: '10px 10px 0px 0px',
      }}
    >
      <Stack direction="row" justifyContent="space-between">
        <MenuButton title="Dashboard" icon="/assets/icons/navbar/ic_dashboard.svg" />
        <MenuButton title="Wallets" icon="/assets/icons/navbar/ic_wallets.svg" />
        <MenuButton title="Nefture +" icon="/assets/icons/navbar/ic_guard.svg" />
        <MenuButton title="Settings" icon="/assets/icons/navbar/ic_settings.svg" />
      </Stack>
    </Box>
  );
}
