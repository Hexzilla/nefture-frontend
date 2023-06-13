import Head from 'next/head';
import { Container } from '@mui/material';

import DashboardLayout from '@layouts/dashboard';
import AnimatedContainer from '@components/animated-container';
import { useSettingsContext } from '@components/settings';
import ScheduledProducts from '@sections/my-products/scheduled/ScheduledProducts';

export default function SavedProductsPage() {
  const { themeStretch } = useSettingsContext();

  return (
    <AnimatedContainer>
      <Head>
        <title> Scheduled | Nefture</title>
      </Head>
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <ScheduledProducts />
      </Container>
    </AnimatedContainer>
  );
}

SavedProductsPage.getLayout = (page: React.ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
);
