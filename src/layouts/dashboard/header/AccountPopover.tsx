import { useState } from 'react';
// next
import { useRouter } from 'next/router';
// @mui
import { alpha } from '@mui/material/styles';
import { Box, Divider, Typography, Stack, MenuItem } from '@mui/material';
// routes
import { PATH_DASHBOARD, PATH_AUTH } from '../../../routes/paths';
// auth
import { useAuthContext } from '../../../auth/useAuthContext';
// components
import { CustomAvatar } from '../../../components/custom-avatar';
import { useSnackbar } from '../../../components/snackbar';
import MenuPopover from '../../../components/menu-popover';
import { IconButtonAnimate } from '../../../components/animate';

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const { replace, push } = useRouter();

  const { user, logout } = useAuthContext();

  const { enqueueSnackbar } = useSnackbar();

  const [openPopover, setOpenPopover] = useState<HTMLElement | null>(null);

  const handleOpenPopover = (event: React.MouseEvent<HTMLElement>) => {
    setOpenPopover(event.currentTarget);
  };

  const handleClosePopover = () => {
    setOpenPopover(null);
  };

  const handleLogout = async () => {
    try {
      logout();
      replace(PATH_AUTH.login);
      handleClosePopover();
    } catch (error) {
      console.error(error);
      enqueueSnackbar('Unable to logout!', { variant: 'error' });
    }
  };

  const handleClickItem = (path: string) => {
    handleClosePopover();
    push(path);
  };

  return (
    <>
      <IconButtonAnimate
        onClick={handleOpenPopover}
        sx={{
          p: 0,
          ...(openPopover && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
            },
          }),
        }}
      >
        <CustomAvatar src={user?.photoURL} alt={user?.displayName} name={user?.displayName} />
      </IconButtonAnimate>

      <MenuPopover open={openPopover} onClose={handleClosePopover} sx={{ width: 304, py: 2 }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', px: 2, pb: 1 }}>
          <CustomAvatar src={user?.photoURL} alt={user?.displayName} name={user?.displayName} />
          <Box sx={{ ml: 1, my: 1 }}>
            <Typography variant="body1" fontWeight="medium" noWrap>
              {user?.displayName}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Box
                component="img"
                src="/assets/icons/header/ic_light.svg"
                sx={{ height: '13px', width: 'auto', mr: 0.5 }}
              />
              <Typography variant="body2" color="text.secondary" noWrap>
                Professional Plan
              </Typography>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack sx={{ p: 2 }} spacing={2}>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Box
              component="img"
              src="/assets/icons/header/ic_account.svg"
              sx={{ height: 'auto', width: '17px' }}
            />
            <MenuItem onClick={() => handleClickItem(PATH_DASHBOARD.user.account)}>
              Account
            </MenuItem>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Box
                component="img"
                src="/assets/icons/header/ic_link.svg"
                sx={{ height: 'auto', width: '17px' }}
              />
              <MenuItem onClick={() => handleClickItem(PATH_DASHBOARD.user.account)}>
                Shopify Connected
              </MenuItem>
            </Box>
            <Box
              component="img"
              src="/assets/icons/header/ic_check.svg"
              sx={{ height: 'auto', width: '17px' }}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Box
              component="img"
              src="/assets/icons/header/ic_out.svg"
              sx={{ height: '15px', width: 'auto' }}
            />
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Box>
        </Stack>
        <Divider sx={{ borderStyle: 'dashed' }} />
        <Typography variant="body2" color="text.secondary" mt={2} ml={2}>
          © 2023 Nefture
        </Typography>
      </MenuPopover>
    </>
  );
}
