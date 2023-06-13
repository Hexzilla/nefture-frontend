import Head from 'next/head';
import { Container } from '@mui/material';

import DashboardLayout from '@layouts/dashboard';
import AnimatedContainer from '@components/animated-container';
import { useSettingsContext } from '@components/settings';
import SavedProductsTable from '@sections/my-products/saved-products/SavedProductsTable';

export default function SavedProductsPage() {
  const { themeStretch } = useSettingsContext();

  return (
    <AnimatedContainer>
      <Head>
        <title> Saved products | Nefture</title>
      </Head>
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <SavedProductsTable />
      </Container>
    </AnimatedContainer>
  );
}

SavedProductsPage.getLayout = (page: React.ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
);
