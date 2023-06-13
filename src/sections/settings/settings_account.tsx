// @mui
import {
  Box,
  Grid,
  Card,
  Button,
  Typography,
  InputAdornment,
  Stack,
  FormControl,
} from '@mui/material';
import * as Yup from 'yup';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// components
import Image from '../../components/image';
import FormProvider, { RHFTextField } from '../../components/hook-form';

// ----------------------------------------------------------------------

type FormValuesProps = {
  storeName: string;
  afterSubmit?: string;
};

export default function SettingAccount() {
  const ConnectSchema = Yup.object().shape({
    storeName: Yup.string().required('store-name is required'),
  });

  const defaultValues = {
    storeName: '',
  };

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(ConnectSchema),
    defaultValues,
  });

  return (
    <Box sx={{ mt: 3 }}>
      <Grid container spacing={5} sx={{ mt: 1 }}>
        <Grid item xs={12} md={12}>
          <Card sx={{ p: 3 }} />
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ p: 3 }}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <FormControl fullWidth>
                <Typography variant="body2" fontWeight="medium">
                  First name
                </Typography>
                <RHFTextField name="firstName" label="First name" />
              </FormControl>
              <FormControl fullWidth>
                <Typography variant="body2" fontWeight="medium">
                  Last name
                </Typography>
                <RHFTextField name="lastName" label="Last name" />
              </FormControl>
            </Stack>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}></Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', pt: 2 }}>
              <Image
                disabledEffect
                alt=""
                src="/assets/icons/dashboard/shopify-Nefture-connect.svg"
                sx={{ maxWidth: 230 }}
              />
            </Box>
            <FormProvider methods={methods}>
              {/* {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>} */}
              <RHFTextField
                fullWidth
                name="storeName"
                label=""
                placeholder="store-name"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Typography variant="subtitle2" color="black">
                        .myshopify.com
                      </Typography>
                    </InputAdornment>
                  ),
                }}
              />
            </FormProvider>
            <Button
              size="large"
              variant="contained"
              color="primary"
              onClick={() => {}}
              sx={{ ml: 2 }}
            >
              Connect
            </Button>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
