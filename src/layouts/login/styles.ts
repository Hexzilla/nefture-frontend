// @mui
import { styled, alpha } from '@mui/material/styles';

export const StyledRoot = styled('main')(({ theme }) => ({
  width: '100%',
  height: '100vh',
  backgroundColor: 'white',
  [theme.breakpoints.up('lg')]: {
    backgroundImage: `url('/assets/icons/auth/login_desktop_image.svg')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  [theme.breakpoints.down('lg')]: {
    backgroundImage: `url('/assets/icons/auth/login_desktop_image.svg')`,
    backgroundPosition: 'left center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
}));

export const StyledContent = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'left',
  justifyContent: 'left',
  flexDirection: 'column',
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    padding: theme.spacing(0, 10, 0, 10),
  },
  [theme.breakpoints.between('sm', 'lg')]: {
    padding: theme.spacing(0, 5, 0, 5),
  },
  [theme.breakpoints.between('xs', 'sm')]: {
    padding: theme.spacing(0, 2, 0, 2),
  },
  height: '100vh',

  
}));
