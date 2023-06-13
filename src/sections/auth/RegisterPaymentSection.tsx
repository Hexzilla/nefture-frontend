import NextLink from 'next/link';
import {
  Stack,
  Typography,
  Box,
  FormControl,
  InputAdornment,
  FormControlLabel,
  Checkbox,
  IconButton,
  Select,
  MenuItem,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

import { PATH_AUTH } from '../../routes/paths';
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

export default function RegisterPaymentSection() {
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
      <Stack spacing={2} sx={{ mb: 6 }}>
        <Typography
          variant="body2"
          fontWeight="bold"
          color="grey.700"
          sx={{
            textTransform: 'capitalize',
          }}
        >
          CONTACT INFORMATION
        </Typography>

        <FormControl fullWidth sx={{ mt: 2 }}>
          <Typography variant="body2" fontWeight="medium" color="grey.900">
            Email address
          </Typography>
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

        <FormControlLabel
          control={
            <Checkbox
              defaultChecked
              sx={{
                color: 'grey.200',
                '&.Mui-checked': {
                  color: 'primary.main',
                },
              }}
            />
          }
          label="Email me with Nefture news and offers"
        />
      </Stack>

      <Stack spacing={2} sx={{ mb: 6 }}>
        <Typography
          variant="body2"
          fontWeight="bold"
          color="grey.700"
          sx={{
            textTransform: 'capitalize',
          }}
        >
          BILLING INFORMATION
        </Typography>
        <FormControl fullWidth>
          <Typography variant="body2" fontWeight="medium" color="grey.900">
            Country
          </Typography>
          <Select placeholder="Select country">
            <MenuItem value={30}>Asia</MenuItem>
          </Select>
        </FormControl>

        <Stack spacing={2} direction={{ xs: 'column', md: 'row' }}>
          <FormControl fullWidth>
            <Typography variant="body2" fontWeight="medium" color="grey.900">
              First name
            </Typography>
            <RHFTextField name="First name" label="" placeholder="First name" />
          </FormControl>
          <FormControl fullWidth>
            <Typography variant="body2" fontWeight="medium" color="grey.900">
              Last name
            </Typography>
            <RHFTextField name="Last name" label="" placeholder="Last name" />
          </FormControl>
        </Stack>

        <FormControl fullWidth>
          <Typography variant="body2" fontWeight="medium" color="grey.900">
            Address
          </Typography>
          <RHFTextField name="address" placeholder="Enter your full address" />
        </FormControl>

        <Stack spacing={2} direction={{ xs: 'column', md: 'row' }}>
          <FormControl fullWidth>
            <Typography variant="body2" fontWeight="medium" color="grey.900">
              City
            </Typography>
            <RHFTextField name="City" label="" placeholder="Enter city" />
          </FormControl>
          <FormControl fullWidth>
            <Typography variant="body2" fontWeight="medium" color="grey.900">
              Postal code
            </Typography>
            <RHFTextField name="Postal code" label="" placeholder="Enter your post code" />
          </FormControl>
        </Stack>
      </Stack>

      <Stack spacing={2} sx={{ mb: 6 }}>
        <Typography
          variant="body2"
          fontWeight="bold"
          color="grey.700"
          sx={{
            textTransform: 'capitalize',
          }}
        >
          CARD INFORMATION
        </Typography>
        <FormControl fullWidth>
          <Typography variant="body2" fontWeight="medium" color="grey.900">
            Card number
          </Typography>
          <RHFTextField
            name="Card number"
            placeholder="1234 1234 1234"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" sx={{ width: '60%' }}>
                  <Box
                    component="img"
                    src="/assets/icons/auth/register_payment_visa-logo.svg"
                    sx={{ width: '34px', height: '24px' }}
                  />
                  <Box
                    component="img"
                    src="/assets/icons/auth/register_payment_Mastercard.svg"
                    sx={{ width: '34px', height: '24px' }}
                  />
                  <Box
                    component="img"
                    src="/assets/icons/auth/register_payment_AMEX.svg"
                    sx={{ width: '34px', height: '24px' }}
                  />
                  <Box
                    component="img"
                    src="/assets/icons/auth/register_payment_UnionPay.svg"
                    sx={{ width: '34px', height: '24px' }}
                  />
                </InputAdornment>
              ),
            }}
          />
        </FormControl>

        <Stack spacing={2} direction={{ xs: 'column', md: 'row' }}>
          <FormControl fullWidth>
            <Typography variant="body2" fontWeight="medium" color="grey.900">
              Expiry date
            </Typography>
            <RHFTextField name="Expiry date" label="" placeholder="MM / YY" />
          </FormControl>
          <FormControl fullWidth>
            <Typography variant="body2" fontWeight="medium" color="grey.900">
              CVC
            </Typography>
            <RHFTextField name="CVC" label="" placeholder="123" />
          </FormControl>
        </Stack>
        <FormControl fullWidth>
          <Typography variant="body2" fontWeight="medium" color="grey.900">
            Name on card
          </Typography>
          <RHFTextField name="Name on card" placeholder="Enter name on card" />
        </FormControl>
        <Stack spacing={2} direction={{ xs: 'column', md: 'row' }}>
          <FormControl fullWidth>
            <Typography variant="body2" fontWeight="medium" color="grey.900">
              Country/Region
            </Typography>
            <RHFTextField name="Country/Region" label="" placeholder="Enter country" />
          </FormControl>
          <FormControl fullWidth>
            <Typography variant="body2" fontWeight="medium" color="grey.900">
              Postal code
            </Typography>
            <RHFTextField name="Postal code" label="" placeholder="Enter your post code" />
          </FormControl>
        </Stack>
      </Stack>

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        sx={{ mb: 6 }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <IconButton component={NextLink} href={PATH_AUTH.pricing}>
            <Box
              component="img"
              src="/assets/icons/auth/register_back.svg"
              sx={{
                width: '12px',
                height: '12px',
              }}
            />
            <Typography variant="body1" color="grey.900" fontWeight="bold">
              Back
            </Typography>
          </IconButton>
        </Box>

        <LoadingButton
          component={NextLink}
          href={PATH_AUTH.welcome}
          color="inherit"
          size="large"
          variant="contained"
          sx={{
            bgcolor: 'grey.100',
            color: 'grey.400',
            '&:hover': {
              bgcolor: 'primary.main',
              color: 'common.white',
            },
          }}
        >
          Pay now
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}
