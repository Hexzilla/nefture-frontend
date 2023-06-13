// next
import NextLink from 'next/link';
// @mui
import { Alert, Tooltip, Stack, Typography, Link, Box } from '@mui/material';
// auth
import { useAuthContext } from '../../auth/useAuthContext';
// layouts
import LoginLayout from '../../layouts/login';
// routes
import { PATH_AUTH } from '../../routes/paths';
//
import AuthLoginForm from './AuthLoginForm';

// ----------------------------------------------------------------------

export default function Login() {
  const { method } = useAuthContext();

  return (
    <LoginLayout>
      <Stack spacing={2} sx={{ mb: 5, position: 'relative', textAlign: 'center'}}>
        <Typography variant="h6">Welcome back!</Typography>
        <Typography variant="body1" color='text.secondary' >Login to your account using your email and password.</Typography>
      </Stack>

      <Alert severity="info" sx={{ mb: 3, fontSize: "1rem" }}>
        Use email : <strong>demo@minimals.cc</strong> / password :<strong> demo1234</strong>
      </Alert>

      <AuthLoginForm />

      <Stack direction="row" justifyContent='center' spacing={0.5} sx={{ mt: 3 }}>
        <Typography variant="body2" fontWeight='bold'>Don’t have an Nefture account?</Typography>
        <Link component={NextLink} href={PATH_AUTH.register} variant="body2" fontWeight='bold'>
          Sign up
        </Link>
      </Stack>
    </LoginLayout>
  );
}
