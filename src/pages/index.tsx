import { useState } from 'react';
import * as Yup from 'yup';
// next
import Head from 'next/head';
// @mui
import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
  Alert,
  InputAdornment,
  IconButton,
} from '@mui/material';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// auth
import { useAuthContext } from '../auth/useAuthContext';
// layouts
import DashboardLayout from '../layouts/dashboard';
// hooks
import useResponsive from '../hooks/useResponsive';
// components
import AnimatedContainer from '../components/animated-container';
import { useSettingsContext } from '../components/settings';
import ActionDialog from '../components/action-dialog';
import FormProvider, { RHFTextField } from '../components/hook-form';
// sections
import {
  DashboardShopify,
  DashboardWidgetSummary,
  DashboardScheduledProduct,
  DashboardInfo,
} from '../sections/@dashboard/dashboard';

// ----------------------------------------------------------------------

GeneralAppPage.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;

// ----------------------------------------------------------------------

const INFOS = [
  {
    title: 'Product research',
    description: 'Aliquam sagittis auctor in tellus auctor iaculis eget mollis. ',
    img: '/assets/icons/dashboard/product-research-down.svg',
  },
  {
    title: 'Sales tracker',
    description: 'Aliquam sagittis auctor in tellus auctor iaculis eget mollis. ',
    img: '/assets/icons/dashboard/sales-tracker.svg',
  },
  {
    title: 'My product',
    description: 'Aliquam sagittis auctor in tellus auctor iaculis eget mollis. ',
    img: '/assets/icons/dashboard/my-product.svg',
  },
];

const SCHEDULED_PRODUCT = {
  userName: 'Luke Dalton',
  productName: 'Homerton Crew Tracksuit',
  siteUrl: 'www.voilondon.com',
  scheduledDate: 'Mar 23, 2023',
  userAvatar: '/assets/icons/dashboard/user-avatar.png',
};

// ----------------------------------------------------------------------

type FormValuesProps = {
  storeName: string;
  afterSubmit?: string;
};

export default function GeneralAppPage() {
  const isMobile = useResponsive('down', 'sm');
  const { user } = useAuthContext();
  const [openConnectDialog, setOpenConnectConfirm] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);

  const { themeStretch } = useSettingsContext();

  const handleOpenConnectDialog = () => {
    setOpenConnectConfirm(true);
  };

  const handleConnect = () => {
    setOpenConfirm(true);
    setOpenConnectConfirm(false);
  };

  const handleCloseConfirm = () => {
    setOpenConfirm(false);
  };

  const handleCloseConnectDialog = () => {
    setOpenConnectConfirm(false);
  };

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

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;

  const onSubmit = async (data: FormValuesProps) => {
    try {
      // TODO Connect to shopify
      // await login(data.email, data.password);
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
    <AnimatedContainer>
      <Head>
        <title> Dashboard | Nefture</title>
      </Head>
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <DashboardShopify
              title="Connect your Shopify account"
              description="Aliquam sagittis auctor in tellus auctor iaculis eget mollis."
              img={
                <Box
                  component="img"
                  src="/assets/icons/dashboard/shopify.svg"
                  sx={{
                    height: { xs: '40px', md: '60px' },
                    width: 'auto',
                    pr: { md: 3 },
                    mb: { xs: 3, md: 0 },
                  }}
                />
              }
              action={
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => {
                    handleOpenConnectDialog();
                  }}
                  sx={{ mt: { xs: 2, md: 0 } }}
                >
                  Connect store
                </Button>
              }
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <DashboardWidgetSummary
              title="Product research"
              total={12}
              img={
                <Box
                  component="img"
                  src="/assets/icons/dashboard/product-research-up.svg"
                  sx={{ height: '56px', width: 'auto' }}
                />
              }
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <DashboardWidgetSummary
              title="Tracked products"
              total={35}
              img={
                <Box
                  component="img"
                  src="/assets/icons/dashboard/tracked-products.svg"
                  sx={{ height: '56px', width: 'auto' }}
                />
              }
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <DashboardScheduledProduct
              title="Scheduled product for today"
              scheduledProduct={SCHEDULED_PRODUCT}
              emptyDescription="Nothing scheduled today"
              emptyImg="/assets/icons/dashboard/scheduled-product-empty.svg"
            />
          </Grid>
          
          <Grid item xs={12}>
            <Typography variant="subtitle1">Get Started</Typography>
            <Typography variant="body1" color="text.secondary">
              Aliquam sagittis auctor in tellus auctor iaculis eget mollis.{' '}
            </Typography>
          </Grid>
          {INFOS.map((info, index) => (
            <Grid key={index} item xs={12} md={4}>
              <DashboardInfo title={info.title} description={info.description} img={info.img} />
            </Grid>
          ))}
        </Grid>
      </Container>

      <ActionDialog
        open={openConnectDialog}
        onClose={handleCloseConnectDialog}
        closeIcon={
          <IconButton
            aria-label="close"
            onClick={() => {
              handleCloseConnectDialog();
            }}
            sx={{
              position: 'absolute',
              right: 32,
              top: 32,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <Box
              component="img"
              src="/assets/icons/dashboard/close.svg"
              sx={{ height: '10px', width: '10px' }}
            />
          </IconButton>
        }
        img={
          <Box
            component="img"
            src="/assets/icons/dashboard/shopify-Nefture-connect.svg"
            sx={{ height: '108px', width: 'auto', mt: 3 }}
          />
        }
        title="Connect your Shopify account"
        content="Aliquam sagittis auctor in tellus auctor iaculis eget mollis."
        action={
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between',
            }}
          >
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
              {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}
              <RHFTextField
                fullWidth
                inputProps={{
                  style: {
                    height: '24px',
                    paddingTop: '12px',
                    paddingBottom: '12px',
                  },
                }}
                name="storeName"
                label=""
                placeholder="store-name"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Typography variant="body1" color="text.primary">
                        .myshopify.com
                      </Typography>
                    </InputAdornment>
                  ),
                }}
              />
            </FormProvider>
            <Button
              size="large"
              fullWidth={isMobile}
              // disabled
              variant="contained"
              color="primary"
              onClick={() => {
                handleConnect();
              }}
              sx={{ ml: { xs: 0, md: 2 }, mt: { xs: 1.5, md: 0 } }}
            >
              Connect
            </Button>
          </Box>
        }
      />

      <ActionDialog
        open={openConfirm}
        onClose={handleCloseConfirm}
        closeIcon={null}
        img={
          <Box
            component="img"
            src="/assets/icons/dashboard/modal-confirm.svg"
            sx={{ height: '96px', width: 'auto', mt: 4, mb: 3 }}
          />
        }
        title="Shopify store connected"
        content="Aliquam sagittis auctor in tellus auctor iaculis eget mollis."
        action={
          <Box
            sx={{
              display: 'flex',
              flexGrow: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Button
              size="large"
              variant="outlined"
              color="inherit"
              onClick={() => {
                handleCloseConfirm();
              }}
            >
              Close
            </Button>

            <Button
              size="large"
              variant="contained"
              color="primary"
              onClick={() => {
                handleCloseConfirm();
              }}
            >
              Okay
            </Button>
          </Box>
        }
      />
    </AnimatedContainer>
  );
}
