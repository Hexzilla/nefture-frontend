import { useMemo } from 'react';
// @mui
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeOptions, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
// components
import { useSettingsContext } from '../components/settings';
//
import palette from './palette';
import typography from './typography';
import breakpoints from './breakpoints';
import shadows from './shadows';
import componentsOverride from './overrides';
import customShadows from './customShadows';
import GlobalStyles from './globalStyles';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: Props) {
  const { themeMode, themeDirection } = useSettingsContext();

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette: palette(themeMode),
      typography,
      breakpoints,
      shape: { borderRadius: 8 },
      direction: themeDirection,
      shadows: shadows(themeMode),
      customShadows: customShadows(themeMode),
    }),
    [themeDirection, themeMode]
  );

  const theme = createTheme(themeOptions);

  theme.components = componentsOverride(theme);

  return (
  <div style={{
    background: 'linear-gradient(rgb(45,51,65), rgb(41,41,41))',
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: 'cover', width: '100%', height: '100%'
  }}>
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      {children}
    </MUIThemeProvider>
    </div>
  );
}
