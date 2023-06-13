// next
import Head from 'next/head';
// sections
import { styled, alpha } from '@mui/material/styles';
import { Grid, Typography, Box } from '@mui/material';
import RegisterPaymentSection from '../../sections/auth/RegisterPaymentSection';
import RegisterPaymentProfile from '../../sections/auth/RegisterPaymentProfile';
import Logo from '../../components/logo';

// ----------------------------------------------------------------------

const StyledSection = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'left',
  justifyContent: 'left',
  flexDirection: 'column',
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    padding: theme.spacing(0, 10, 0, 10),
    height: '100%'
  },
  [theme.breakpoints.between('sm', 'lg')]: {
    padding: theme.spacing(0, 5, 0, 5),
  },
  [theme.breakpoints.between('xs', 'sm')]: {
    padding: theme.spacing(0, 2, 0, 2),
  },
  background: '#16132F',
  color: '#FFFFFF',
}));

const StyledContent = styled('div')(({ theme }) => ({
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
}));

export default function RegisterPayment() {
  return (
    <>
      <Head>
        <title> Register | Payment</title>
      </Head>

      <Grid container sx={{ background: '#FAFAFA'}}  direction={{xs:"column-reverse", sm:"column", lg:"row"}}>
        <Grid item xs={12} md={6}>
          <StyledContent>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'left',
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
            <RegisterPaymentSection />
          </StyledContent>
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledSection>
            <RegisterPaymentProfile />
          </StyledSection>
        </Grid>
      </Grid>
    </>
  );
}
