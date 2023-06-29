import { useEffect } from 'react';
// next
import { useRouter } from 'next/router';
// @mui
import { Box, Drawer, Stack, Typography, Button, Divider } from '@mui/material';
// hooks
import useResponsive from '../../../hooks/useResponsive';
// config
import { HEADER, NAV } from '../../../config-global';
// components
import HeaderLogo from '../../../components/header-logo';
import { NavSectionVertical } from '../../../components/nav-section';
import Scrollbar from '../../../components/scrollbar';
//
import navConfig, { bottomNavConfig } from './config-navigation';
import { padding } from '@mui/system';

// ----------------------------------------------------------------------

type Props = {
  openNav: boolean;
  onCloseNav: VoidFunction;
};

export default function NavVertical({ openNav, onCloseNav }: Props) {
  const { pathname } = useRouter();

  const isDesktop = useResponsive('up', 'lg');

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Stack
      sx={{
        height: 1,
        borderColor: '#474B56',
        borderWidth: '1px',
        borderRightStyle: 'solid',
        paddingTop: '92px',
      }}
    >
      <NavSectionVertical data={navConfig} />

      <Box sx={{ flexGrow: 1 }} />
      <Box
        sx={{
          backgroundColor: '#0EAE88',
          backgroundImage: 'linear-gradient(to right, #0EAE88 , #1350C7)',
          borderRadius: '8px',
          margin: '24px',
          padding: '12px',
        }}
      >
        <Typography textAlign="center" color="white">
          Upgrade your Wallet Security
        </Typography>

        <Button sx={{ width: '100%', background: 'white', color: '#1350C7', marginTop: '12px' }}>
          Upgrade to Pro
        </Button>
      </Box>

      <NavSectionVertical data={bottomNavConfig} />
    </Stack>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.W_DASHBOARD },
      }}
    >
      {isDesktop ? (
        <Drawer
          open
          variant="permanent"
          PaperProps={{
            sx: {
              zIndex: 0,
              width: NAV.W_DASHBOARD,
              bgcolor: 'transparent',
              borderStyle: 'none',
            },
          }}
        >
          {renderContent}
        </Drawer>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: {
              width: NAV.W_DASHBOARD_MOBILE,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}
