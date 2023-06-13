import { Box, Grid, Stack } from '@mui/material';
import React from 'react';

import Product from '@components/products/Product';
import StyledBox from '@components/atoms/StyledBox';
import StatusBar from './StatusBar';
import Toolbar from './Toolbar';
import RevenueGraph from './RevenueGraph';

export default function OverviewProducts() {
  return (
    <>
      <Box component="div">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <StyledBox sx={{ background: 'white' }}>
              <Product
                title="Voi London"
                logo="/assets/images/company/voilondon.png"
                url="www.voilondon.com"
              />
            </StyledBox>
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledBox sx={{ background: 'white' }}>
              <Product
                title="Homerton Crew Tracksuit - Black"
                logo="/assets/icons/dashboard/user-avatar.png"
                url="Lorem ipsum"
              />
            </StyledBox>
          </Grid>
        </Grid>
      </Box>
      <StatusBar />
      <RevenueGraph />
    </>
  );
}
