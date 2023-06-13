import { Box, Grid, Stack } from '@mui/material';
import React, { useState } from 'react';

import Product from '@components/products/Product';
import StyledBox from '@components/atoms/StyledBox';
import StatusBar from './StatusBar';
import Toolbar from './Toolbar';
import RevenueGraph from './RevenueGraph';
import OverviewProducts from './OverviewProducts';
import CreativeProducts from './CreativeProducts';
import FileProducts from './FileProducts';

export default function ManageProduct() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Stack direction="column" spacing={4} mt={3}>
      <Toolbar value={activeTab} setValue={setActiveTab}/>
      {(activeTab === 0) && <OverviewProducts/>}
      {(activeTab === 1) && <CreativeProducts/>}
      {(activeTab === 2) && <FileProducts/>}
    </Stack>
  );
}
