import React from 'react';
import { Button, Box, Stack, Typography, Link } from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import { NavSectionProps } from '@components/nav-section';

const MenuButton = ({ title, icon, link }: { title: string; icon: string , link: string}) => (
  <Link href={link} rel="noopener" underline="none" >
    <Button variant="text" sx={{ color: 'white' }}>
      <Stack direction="column" alignItems="center" spacing={1}>
        <Box component="img" src={icon} width={24} />
        <Typography variant="caption">{title}</Typography>
      </Stack>
    </Button>
  </Link>
);

export default function MobileMenu({ data, sx, ...other }: NavSectionProps) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        background: '#2D2D2D',
        opacity: 1,
        border: '1px solid rgba(255, 255, 255, 0.12)',
        borderRadius: '10px 10px 0px 0px',
        width:'100%'
      }}
    >
      <Stack direction="row" justifyContent="space-between">
        <MenuButton title="Dashboard" icon="/assets/icons/navbar/ic_dashboard.svg" link="/"/>
        <MenuButton title="Wallets" icon="/assets/icons/navbar/ic_wallets.svg" link="/wallet"/>
        <MenuButton title="Nefture +" icon="/assets/icons/navbar/ic_guard.svg" link="/nefture"/>
        <MenuButton title="Settings" icon="/assets/icons/navbar/ic_settings.svg" link="/settings"/>
      </Stack>
    </Box>
  );
}
