import React from 'react';
import { Card, Grid, Box, Divider } from '@mui/material';

import SerachButton from '@components/research/SearchButton';
import SearchCountry from '@sections/research/SearchCountry';
import AddSearchKeywords from '@sections/research/AddSearchKeywords';
import ActiveAdsFilter from '@sections/research/ActiveAdsFilter';

export default function SearchTool() {
  return (
    <Card
      sx={{
        p: 3,
        borderColor: 'grey.200',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderRadius: 1,
      }}
    >
      <Grid container spacing={6}>
        <Grid item xs={12} sm={6}>
          <SearchCountry />
        </Grid>

        <Grid item xs={12} sm={6}>
          <ActiveAdsFilter />
        </Grid>

        <Grid item xs={12}>
          <AddSearchKeywords />
        </Grid>

        <Grid item xs={12}>
          <Divider />
        </Grid>

        <Grid item xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <SerachButton variant="contained" sx={{ color: 'white' }}>Search</SerachButton>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}
