// @mui
import { Typography, Stack, Box, Grid, Card } from '@mui/material';
// components
import Logo from '../../components/logo';
import Image from '../../components/image';
//
import { StyledContent, StyledRoot } from './styles';

// ----------------------------------------------------------------------

type Props = {
  title?: string;
  illustration?: string;
  children: React.ReactNode;
};

export default function LoginLayout({ children, illustration, title }: Props) {
  return (
    <StyledRoot>
      <Grid container direction={{ xs: 'column', md: 'column', lg: 'row' }}>
        <Grid item xs={12} md={6}>
          <StyledContent>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                mt: { xs: 3, md: 5, lg: 5 },
                mb: { xs: 5, md: 5, lg: 10 },
              }}
            >
              <Logo />
              <Typography variant="h5" align="center" paragraph sx={{ my: 0, mx: 1 }}>
                Nefture
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: { xs: 'center', lg: 'flex-start' },
                alignItems: 'center',
                height: '80vh',
              }}
            >
              <Card
                sx={{
                  mb: 5,
                  p: 5,
                  boxShadow:
                    '0px 1px 2px rgba(0, 0, 0, 0.06), 0px 8px 24px -4px rgba(0, 0, 0, 0.08)',
                  borderRadius: '16px',
                }}
              >
                <Stack sx={{ width: 1 }}> {children} </Stack>
              </Card>
            </Box>
          </StyledContent>
        </Grid>
      </Grid>
    </StyledRoot>
  );
}
