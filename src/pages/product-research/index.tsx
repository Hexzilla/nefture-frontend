import { useState } from 'react';
import Head from 'next/head';
import { Container, Grid } from '@mui/material';

import DashboardLayout from '@layouts/dashboard';
import AnimatedContainer from '@components/animated-container';
import { useSettingsContext } from '@components/settings';
import SearchTabs from '@sections/research/SearchTabs';

import SearchTool from './SearchTool';
import SearchHistory from './SearchHistory';

export default function ProductResearchPage() {
  const [searchMode, setSearchMode] = useState(0);
  const { themeStretch } = useSettingsContext();

  return (
    <AnimatedContainer>
      <Head>
        <title> Product Search | Nefture</title>
      </Head>
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <SearchTabs value={searchMode} setValue={setSearchMode} />
          </Grid>

          <Grid item xs={12}>
            {searchMode === 0 && <SearchTool />}
            {searchMode === 1 && <SearchHistory />}
          </Grid>
        </Grid>
      </Container>
    </AnimatedContainer>
  );
}

ProductResearchPage.getLayout = (page: React.ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
);
