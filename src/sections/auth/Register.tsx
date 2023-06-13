// next
import NextLink from 'next/link';
// @mui
import { Stack, Typography, Link } from '@mui/material';
// layouts
import LoginLayout from '../../layouts/login';
// routes
import { PATH_AUTH } from '../../routes/paths';
//
import AuthWithSocial from './AuthWithSocial';
import AuthRegisterForm from './AuthRegisterForm';

// ----------------------------------------------------------------------

export default function Register() {
  return (
    <LoginLayout title="Manage the job more effectively with Minimal">
      <Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>
        <Typography variant="h6">Create your Nefture account for free</Typography>

        <AuthWithSocial />
      </Stack>

      <AuthRegisterForm />

      <Stack spacing={2} sx={{ mt: 3, position: 'relative' }}>
        <Stack direction="row" justifyContent="center" spacing={0.5}>
          <Typography variant="body2"> Already have an Nefture account?</Typography>
          <Link component={NextLink} href={PATH_AUTH.login} variant="body2" fontWeight="bold">
            Sign in
          </Link>
        </Stack>
      </Stack>
    </LoginLayout>
  );
}
