// @mui
import { useTheme } from '@mui/material/styles';
import { Stack, AppBar, Toolbar, IconButton, Box } from '@mui/material';
// utils
import { bgBlur } from '../../../utils/cssStyles';
// hooks
import useResponsive from '../../../hooks/useResponsive';
// config
import { HEADER, NAV } from '../../../config-global';
// components
import HeaderLogo from '../../../components/header-logo';
import AccountPopover from './AccountPopover';
import UpgradeButton from './UpgradeButton';
import LanguagePopover from './LanguagePopover';
import HeaderInfo from './HeaderInfo';

// ----------------------------------------------------------------------

type Props = {
  onOpenNav?: VoidFunction;
};

export default function Header({ onOpenNav }: Props) {
  const theme = useTheme();

  const isDesktop = useResponsive('up', 'lg');

  const renderContent = (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="stretch"
      sx={{
        width: 1,
        height: 1,
        margin:'0px',
      }}
    >
      {!isDesktop && (
        <Stack
          flexGrow={1}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ px: 2, height: HEADER.H_MOBILE_EACH }}
        >
          <HeaderLogo />
          <IconButton onClick={onOpenNav} sx={{ mr: 1, color: 'text.primary' }}>
            <Box
              component="img"
              src="/assets/icons/header/ic_menu.svg"
              sx={{ height: '12px', width: 'auto' }}
            />
          </IconButton>
        </Stack>
      )}

      <Stack
        flexGrow={1}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ height: HEADER.H_MOBILE_EACH,
           px: { xs: 2, lg: 0 } }}
      >
        <Stack
          sx={{
            pt: 2,
            pb: 3,
            flexShrink: 0,
          }}
          direction="row"
          justifyContent="flex-start"
        >
          <HeaderLogo />
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={{ xs: 0.5, sm: 1.5 }}
        >
          <UpgradeButton />
          <LanguagePopover />
          <AccountPopover />
        </Stack>
      </Stack>
    </Stack>
  );

  return (
    <AppBar
      sx={{
        boxShadow: 'none',
        height: HEADER.H_MOBILE,
        zIndex: theme.zIndex.appBar + 1,
        px: 0,
        ...bgBlur({
          color: theme.palette.common.white,
        }),
        bgcolor:'transparent',
        transition: theme.transitions.create(['height'], {
          duration: theme.transitions.duration.shorter,
        }),
        ...(isDesktop && {
          width: `100%`,
          height: HEADER.H_DASHBOARD_DESKTOP,
        }),
      }}
    >
      <Toolbar
        sx={{
          height: 1,
          px: { xs: 0, lg: 5 },
          borderColor: 'grey.200',
          borderWidth: '1px',
          borderBottomStyle: 'solid',
        }}
      >
        {renderContent}
      </Toolbar>
    </AppBar>
  );
}
