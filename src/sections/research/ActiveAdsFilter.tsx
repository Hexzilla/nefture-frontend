import React from 'react';
import { Box, TextField } from '@mui/material';

import ResearchHeader from './ResearchHeader';

export default function ActiveAdsFilter() {
  const [num, setNum] = React.useState('');

  const handleChange = (e: any) => {
    const num = Number(e.target.value);
    setNum(Math.max(0, Math.min(num, 500)).toString());
  };

  return (
    <>
      <ResearchHeader
        title="Active ads filter"
        description="Set the minimum number of active ads."
        img="/assets/icons/research/active-ads-filter.svg"
      />
      <Box mt={2}>
        <TextField
          type="number"
          variant="outlined"
          fullWidth
          placeholder="Add a number"
          value={num}
          onChange={(e) => handleChange(e)}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Box>
    </>
  );
}
