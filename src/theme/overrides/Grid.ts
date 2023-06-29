import { Theme, alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function Grid(theme: Theme) {
  return {
    MuiGrid: {
      styleOverrides: {
        root: {
          width: '100%',
        },
      },
    }
  };
}
