import { useState } from 'react';
import Head from 'next/head';
import { Container, Grid, Paper, Slide, Stack } from '@mui/material';

import DashboardLayout from '@layouts/dashboard';
import AnimatedContainer from '@components/animated-container';
import { useSettingsContext } from '@components/settings';

import ProductsViewTabs from '@sections/my-products/overview/ProductsViewTabs';
import ProductsBoardView from '@sections/my-products/overview/ProductsBoardView';
import ProductsTableView from '@sections/my-products/overview/ProductsTableView';

export default function ProductResearchPage() {
  const [searchMode, setSearchMode] = useState(0);
  const { themeStretch } = useSettingsContext();

  return (
    <AnimatedContainer>
      <Head>
        <title> Overview | Nefture</title>
      </Head>

      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Stack direction="column" spacing="24px">
          <Grid container spacing={2} mb={2}>
            <Grid item xs={12}>
              <ProductsViewTabs value={searchMode} setValue={setSearchMode} />
            </Grid>
          </Grid>

          {searchMode === 0 && <ProductsBoardView />}
          {searchMode === 1 && <ProductsTableView />}
        </Stack>
      </Container>
    </AnimatedContainer>
  );
}

ProductResearchPage.getLayout = (page: React.ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
);
