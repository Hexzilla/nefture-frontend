// next
import Head from 'next/head';
// sections
import { styled } from '@mui/material/styles';
import { Stack, Typography, Box, Card } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import Logo from '../../components/logo';
import { useAuthContext } from '../../auth/useAuthContext';
import { PATH_DASHBOARD } from '../../routes/paths';

const StyledContent = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor: "white",
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    padding: theme.spacing(0, 10, 0, 10),
    backgroundImage: `url('/assets/icons/auth/register_frame.svg')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  [theme.breakpoints.between('sm', 'lg')]: {
    padding: theme.spacing(0, 5, 0, 5),
    backgroundImage: `url('/assets/icons/auth/login_desktop_image.svg')`,
    backgroundPosition: 'left center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  [theme.breakpoints.between('xs', 'sm')]: {
    padding: theme.spacing(0, 2, 0, 2),
    backgroundImage: `url('/assets/icons/auth/login_desktop_image.svg')`,
    backgroundPosition: 'left center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
}));

type FormValuesProps = {
  email: string;
  password: string;
  afterSubmit?: string;
};

export default function registerWelcome() {
  const { login } = useAuthContext();
  const defaultValues = {
    email: 'demo@minimals.cc',
    password: 'demo1234',
  };
  // const onSubmit = async (data: FormValuesProps) => {
  const onSubmit = async () => {
    try {
      await login(defaultValues.email, defaultValues.password);
      window.location.href = PATH_DASHBOARD.root;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Head>
        <title> Register | Welcome</title>
      </Head>

      <StyledContent>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'left',
            alignItems: 'center',
            pt: { xs: 3, md: 5, lg: 5 },
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
            justifyContent: 'center',
            alignItems: 'center',
            height: '80vh',
          }}
        >
          <Card
            sx={{
              p: 5,
              boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.06), 0px 8px 24px -4px rgba(0, 0, 0, 0.08)',
              borderRadius: '16px',
            }}
          >
            <Box component="img" src="/assets/icons/auth/register_welcomeImage.svg" />
            <Typography variant="h5" align="center" paragraph sx={{ px: 3, py: 1 }}>
              Welcome to Nefture, Luke!
            </Typography>
            <Typography variant="body1" align="center" color="grey.700" paragraph sx={{ px: 3 }}>
              Your Nefture account has been successfully created. Let’s get started!
            </Typography>
            <LoadingButton
              fullWidth
              color="inherit"
              size="large"
              onClick={() => {
                onSubmit();
              }}
              variant="contained"
              type="submit"
              endIcon={
                <Box
                  component="img"
                  src="/assets/icons/auth/register_welcome_icon.svg"
                  sx={{ width: '13px', height: '10px' }}
                />
              }
              sx={{
                mt: 2,
                bgcolor: 'primary.main',
                color: 'white',
                '&:hover': {
                  bgcolor: 'grey.100',
                  color: 'grey.400',
                },
              }}
            >
              Create account
            </LoadingButton>
          </Card>
        </Box>
      </StyledContent>
    </>
  );
}
