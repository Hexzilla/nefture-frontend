import { useState } from 'react';
import * as Yup from 'yup';
import Head from 'next/head';
import { Container, Grid } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuthContext } from '../auth/useAuthContext';
import DashboardLayout from '../layouts/dashboard';
import useResponsive from '../hooks/useResponsive';
import AnimatedContainer from '../components/animated-container';
import { useSettingsContext } from '../components/settings';
import TransactionList from '@sections/dashboard/TransactionList';

GeneralAppPage.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;

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

  return (
    <AnimatedContainer>
      <Head>
        <title> Dashboard | Nefture</title>
      </Head>
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <TransactionList />
          </Grid>
        </Grid>
      </Container>
    </AnimatedContainer>
  );
}
