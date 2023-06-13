import React from 'react';
import Head from 'next/head';
import { Card, Container, Grid, Stack } from '@mui/material';

import DashboardLayout from '@layouts/dashboard';
import AnimatedContainer from '@components/animated-container';
import { useSettingsContext } from '@components/settings';

import SearchBar from '@sections/sales-tracker/SalesTrackerSearchBar';
import TrackingTable from '@sections/sales-tracker/SalesTrackerTable';
import Pagination from '@sections/sales-tracker/SalesTrackerPagination';

export default function SalesTrackerPage() {
  const { themeStretch } = useSettingsContext();

  return (
    <AnimatedContainer>
      <Head>
        <title> Sales Tracker | Nefture</title>
      </Head>
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <SearchBar />
          </Grid>

          <Grid item xs={12}>
            <Card sx={{ padding: '24px' }}>
              <Stack spacing={2}>
                <Pagination />
                <TrackingTable />
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </AnimatedContainer>
  );
}

SalesTrackerPage.getLayout = (page: React.ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
);
