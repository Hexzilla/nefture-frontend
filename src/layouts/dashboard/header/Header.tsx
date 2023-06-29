// @mui
import {
  AppBar,
  Box,
  IconButton,
  MenuItem,
  Select,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
// utils
import { bgBlur } from '../../../utils/cssStyles';
// hooks
import useResponsive from '../../../hooks/useResponsive';
// config
import { HEADER } from '../../../config-global';
// components
import HeaderLogo from '../../../components/header-logo';
import { useState } from 'react';
import SelectCoinType from './SelectCoinType';
import SelectCoinAmount from './SelectCoinAmount';
import Iconify from '@components/iconify';

// ----------------------------------------------------------------------

type Props = {
  onOpenNav?: VoidFunction;
};

export default function Header({ onOpenNav }: Props) {
  const theme = useTheme();

  const isDesktop = useResponsive('up', 'md');

  const renderContent = (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="stretch"
      sx={{
        width: 1,
        height: 1,
        margin: '0px',
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
        sx={{ height: HEADER.H_MOBILE_EACH, px: { xs: 2, lg: 0 } }}
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
          {coinTypesData && coinTypesData.length > 0 && <SelectCoinType list={coinTypesData} />}

          {coinAmountsData && coinAmountsData.length > 0 && (
            <SelectCoinAmount list={coinAmountsData} />
          )}

          <IconButton size="small" color="inherit" onClick={() => {}} sx={{ color: 'white' }}>
            <Iconify icon="carbon:notification" width={20} height={20} />
          </IconButton>

          <Tooltip title={'This is a help'}>
            <IconButton size="small" color="inherit" onClick={() => {}} sx={{ color: 'white' }}>
              <Iconify icon="raphael:question" width={20} height={20} />
            </IconButton>
          </Tooltip>
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
        bgcolor: 'transparent',
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
          borderColor: '#474B56',
          borderWidth: '1px',
          borderBottomStyle: 'solid',
        }}
      >
        {renderContent}
      </Toolbar>
    </AppBar>
  );
}

const coinTypesData = [
  { id: 1, name: 'Ethereum', icon: '/assets/images/coins/ethereum.svg' },
  { id: 2, name: 'Bitcoin', icon: '/assets/images/coins/ethereum.svg' },
  { id: 3, name: 'USDT', icon: '/assets/images/coins/ethereum.svg' },
];

const coinAmountsData = [
  { id: 1, name: '0xhab.eth', icon: '/assets/images/avatar/avatar.svg', amount: '42.069ETH' },
  { id: 2, name: '0xcea.eth', icon: '/assets/images/avatar/avatar.svg', amount: '0.1ETH' },
  { id: 3, name: '0xmut.eth', icon: '/assets/images/avatar/avatar.svg', amount: '2.356ETH' },
];
