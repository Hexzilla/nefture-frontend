// next
import NextLink from 'next/link';
// @mui
import { Stack, Typography, Link, Box, FormControl, Divider, Grid } from '@mui/material';
// routes
import { PATH_AUTH } from '../../routes/paths';
//
import * as Yup from 'yup';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import FormProvider, { RHFTextField } from '../../components/hook-form';
import SvgColor from '../../components/svg-color';

// ----------------------------------------------------------------------

type FormValuesProps = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  afterSubmit?: string;
};

export default function RegisterPaymentProfile() {
  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().required('First name required'),
    lastName: Yup.string().required('Last name required'),
    email: Yup.string().required('Email is required').email('Email must be a valid email address'),
    password: Yup.string().required('Password is required'),
  });
  const defaultValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };
  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  return (
    <FormProvider methods={methods}>
      <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={0.5}>
        <Box
          component="img"
          src="/assets/icons/auth/register_payment_logOut.svg"
          sx={{
            width: '18px',
            height: '18px',
            mt: { sm: 3, md: 5, lg: 5 },
            mb: { sm: 5, md: 5, lg: 10 },
          }}
        >
        </Box>
      </Stack>

      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}
        sx={{
          mb: 5,
        }}
      >
        <Box
          component="img"
          src="/assets/icons/auth/register_professional.svg"
          sx={{
            width: '48px',
            height: '48px',
          }}
        />
        <Stack direction="column" justifyContent="center" alignItems="flex-start" spacing={0.5}>
          <Typography variant="body1" fontWeight="bold">
            Professional Plan
          </Typography>
          <Typography variant="body2">Lorem ipsum dolor sit amet consectetur.</Typography>
        </Stack>
      </Stack>
      <Divider sx={{ border: '1px solid #272254' }} />
      <Stack
        spacing={2}
        sx={{
          mb: 5,
          pt: 3,
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={3}
          sx={{ mb: 5 }}
        >
          <Typography variant="body2">Subtotal</Typography>
          <Typography variant="body2">£49.00</Typography>
        </Stack>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={3}
          sx={{ mb: 5 }}
        >
          <Typography variant="body2">Discount</Typography>
          <Typography variant="body2">£0.00</Typography>
        </Stack>
      </Stack>
      <Divider sx={{ border: '1px solid #272254' }} />
      <Stack
        spacing={2}
        sx={{
          mb: 5,
          pt: 3,
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={3}
          sx={{ mb: 5 }}
        >
          <Typography variant="body2">Total due</Typography>
          <Typography variant="body2">£49.00</Typography>
        </Stack>
      </Stack>
    </FormProvider>
  );
}
