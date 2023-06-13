import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

export type ColorSchema = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';

declare module '@mui/material/styles/createPalette' {
  interface TypeBackground {
    neutral: string;
  }
  interface SimplePaletteColorOptions {
    lighter: string;
    darker: string;
  }
  interface PaletteColor {
    lighter: string;
    darker: string;
  }
}

// SETUP COLORS

const GREY = {
  0: '#FFFFFF',
  50: '#FAFAFA',
  100: '#F6F5F7',
  200: '#EEEDF2',
  300: '#C8C5D2',
  400: '#B0ADBC',
  500: '#9590A6',
  600: '#827E91',
  700: '#6F6C7C',
  800: '#5D5A68',
  900: '#16132F',
};

const PRIMARY = {
  lighter: '#F4F2FF',
  light: '#856AFF',
  main: '#292929',
  main1: '#6B55FD',
  dark: '#5042E6',
  darker: '#2F2ECF',
  contrastText: '#FFFFFF',
};

const SECONDARY = {
  lighter: '#F2FDFF',
  light: '#4F89CC',
  main: '#3575B6',
  dark: '#1361A0',
  darker: '#004E8B',
  contrastText: '#FFFFFF',
};

const INFO = {
  lighter: '#CAFDF5',
  light: '#61F3F3',
  main: '#00B8D9',
  dark: '#006C9C',
  darker: '#003768',
  contrastText: '#FFFFFF',
};

const SUCCESS = {
  lighter: '#E5FFD6',
  light: '#2F9B00',
  main: '#048500',
  dark: '#007000',
  darker: '#005C00',
  contrastText: '#FFFFFF',
};

const WARNING = {
  lighter: '#FFF5CC',
  light: '#FFD666',
  main: '#FFAB00',
  dark: '#B76E00',
  darker: '#7A4100',
  contrastText: GREY[800],
};

const ERROR = {
  lighter: '#FFF1EB',
  light: '#DD5E4F',
  main: '#C4483D',
  dark: '#AC332B',
  darker: '#941A1A',
  contrastText: '#FFFFFF',
};

const COMMON = {
  common: { black: '#000000', white: '#FFFFFF' },
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  divider: alpha(GREY[500], 0.24),
  action: {
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[400], 1),
    disabledBackground: alpha(GREY[100], 1),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default function palette(themeMode: 'light' | 'dark') {
  const light = {
    ...COMMON,
    mode: 'light',
    text: {
      primary: GREY[900],
      secondary: GREY[700],
      disabled: GREY[400],
    },
    background: { paper: '#FFFFFF', default: '#FAFAFA', neutral: GREY[200] },
    action: {
      ...COMMON.action,
      active: GREY[600],
    },
  } as const;

  const dark = {
    ...COMMON,
    mode: 'dark',
    text: {
      primary: '#FFFFFF',
      secondary: GREY[500],
      disabled: GREY[600],
    },
    background: {
      paper: GREY[800],
      default: GREY[900],
      neutral: alpha(GREY[500], 0.16),
    },
    action: {
      ...COMMON.action,
      active: GREY[500],
    },
  } as const;

  return themeMode === 'light' ? light : dark;
}
