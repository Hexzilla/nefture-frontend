import { useState } from 'react';
import * as Yup from 'yup';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Typography, Stack, Alert, IconButton, InputAdornment, FormControl } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// auth
import { useAuthContext } from '../../auth/useAuthContext';
// components
import Iconify from '../../components/iconify';
import FormProvider, { RHFTextField } from '../../components/hook-form';
import SvgColor from '../../components/svg-color';

// ----------------------------------------------------------------------

type FormValuesProps = {
  email: string;
  password: string;
  afterSubmit?: string;
};

export default function AuthLoginForm() {
  const { login } = useAuthContext();

  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email must be a valid email address'),
    password: Yup.string().required('Password is required'),
  });

  const defaultValues = {
    email: 'demo@minimals.cc',
    password: 'demo1234',
  };

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;

  const onSubmit = async (data: FormValuesProps) => {
    try {
      await login(data.email, data.password);
    } catch (error) {
      console.log(error);
      reset();
      setError('afterSubmit', {
        ...error,
        message: error.message || error,
      });
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}

        <FormControl fullWidth>
          <Typography variant="body2" fontWeight='medium'>Email</Typography>
          <RHFTextField
            name="email"
            label=""
            placeholder="Enter your email"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SvgColor src="/assets/icons/auth/email.svg" />
                </InputAdornment>
              ),
            }}
          />
        </FormControl>

        <FormControl fullWidth>
          <Typography variant="body2" fontWeight='medium'>Password</Typography>
          <RHFTextField
            name="password"
            label=""
            placeholder="Enter a password"
            type={showPassword ? 'text' : 'password'}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SvgColor src="/assets/icons/auth/password.svg" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
      </Stack>

      <LoadingButton
        fullWidth
        color="inherit"
        size="large"
        type="submit"
        variant="contained"
        loading={isSubmitSuccessful || isSubmitting}
        sx={{
          mt: 2,
          bgcolor:'grey.100',
          color:'grey.400',
          '&:hover': {
            bgcolor: 'primary.main',
            color: 'common.white',
          },
        }}
      >
        Login
      </LoadingButton>
    </FormProvider>
  );
}
