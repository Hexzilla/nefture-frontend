import Head from 'next/head';
import { Container } from '@mui/material';

import DashboardLayout from '@layouts/dashboard';
import AnimatedContainer from '@components/animated-container';
import { useSettingsContext } from '@components/settings';
import ManageProduct from '@sections/my-products/manage-product/ManageProduct';

export default function ManageProductPage() {
  const { themeStretch } = useSettingsContext();

  return (
    <AnimatedContainer>
      <Head>
        <title> Manage product | Nefture</title>
      </Head>
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <ManageProduct />
      </Container>
    </AnimatedContainer>
  );
}

ManageProductPage.getLayout = (page: React.ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
);
