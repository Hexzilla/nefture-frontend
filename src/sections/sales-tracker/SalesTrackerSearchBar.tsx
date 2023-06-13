import React from 'react';
import { TextField, Grid, Button, InputAdornment, Stack, Box } from '@mui/material';

import Iconify from '@components/iconify';

export default function SalesTrackerSearchBar() {
  return (
    <Grid container spacing={3} pt={2}>
      <Grid item xs={12} sm={9}>
        <TextField
          label=""
          placeholder="Enter store URL (https://example.com)"
          fullWidth
          sx={{ bgcolor: 'white' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="end">
                <Iconify icon="eva:search-outline" width={28} mr={1} ml={-1} />
              </InputAdornment>
            ),
          }}
        />
      </Grid>

      <Grid item xs={12} sm={3}>
        <Stack direction="row" alignItems="center" spacing={3}>
          <Button variant="contained" size="large">
            Start tracking
          </Button>
          <Button
            startIcon={
              <Box
                component="img"
                src="/assets/icons/development/package.svg"
                sx={{
                  width: 24,
                  height: 24,
                }}
              />
            }
            variant="outlined"
            size="large"
          >
            0/10 Products
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
}
