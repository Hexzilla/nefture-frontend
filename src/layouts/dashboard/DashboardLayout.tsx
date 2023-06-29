import { useState } from 'react';
// @mui
import { Box } from '@mui/material';
// hooks
import useResponsive from '../../hooks/useResponsive';
// auth
import AuthGuard from '../../auth/AuthGuard';
// components
import { useSettingsContext } from '../../components/settings';
//
import Main from './Main';
import Header from './header';
import MobileMenu from './header/MobileMenu';
import NavMini from './nav/NavMini';
import NavVertical from './nav/NavVertical';
import NavHorizontal from './nav/NavHorizontal';
import navConfig, { mobileNavConfig } from './nav/config-navigation';

// ----------------------------------------------------------------------

type Props = {
  children?: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  const { themeLayout } = useSettingsContext();

  const isDesktop = useResponsive('up', 'md');

  const [open, setOpen] = useState(false);

  const isNavHorizontal = themeLayout === 'horizontal';

  const isNavMini = themeLayout === 'mini';

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderNavVertical = <NavVertical openNav={open} onCloseNav={handleClose} />;

  const renderContent = () => {
    if (isNavHorizontal) {
      return (
        <>
          <Header onOpenNav={handleOpen} />

          {isDesktop ? <NavHorizontal /> : renderNavVertical}

          <Main>{children}</Main>
        </>
      );
    }

    if (isNavMini) {
      return (
        <>
          <Header onOpenNav={handleOpen} />

          <Box
            sx={{
              display: { lg: 'flex' },
              minHeight: { lg: 1 },
            }}
          >
            {isDesktop ? <NavMini /> : renderNavVertical}

            <Main>{children}</Main>
          </Box>
        </>
      );
    }

    return (
      <>
        {isDesktop && <Header onOpenNav={handleOpen} />}

        <Box
          sx={{
            display: { lg: 'flex' },
            minHeight: { lg: '100vh' },
          }}
        >
          {renderNavVertical}

          <Main
            sx={{
              paddingBottom: '10px',
              ...(!isDesktop && {
                paddingBottom: '100px',
                paddingTop: '40px',
              }),
            }}
          >
            {children}
          </Main>
        </Box>

        {!isDesktop && <MobileMenu data={mobileNavConfig}/>}
      </>
    );
  };

  return <AuthGuard> {renderContent()} </AuthGuard>;
}
