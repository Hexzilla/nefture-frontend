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

const background = 'linear-gradient(180deg, rgba(41, 101, 255, 0.1) 0%, rgba(41, 101, 255, 0) 51.64%), linear-gradient(0deg, #292929, #292929), #FFFFFF';

type Props = {
  children?: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  const { themeLayout } = useSettingsContext();

  const isDesktop = useResponsive('up', 'lg');

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
            background,
          }}
        >
          {renderNavVertical}

          <Main
            sx={{
              ...(!isDesktop && {
                p: '0',
              }),
              paddingBottom: 0,
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
