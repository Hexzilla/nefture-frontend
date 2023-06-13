import { Button, Stack, Typography, useTheme, useMediaQuery } from '@mui/material';
import React, { useState } from 'react';

import ShopifyIcon from '@components/icons/Shopify';
import ManageTabs from './ManageTabs';
import ImportProduct from './ImportProduct';

export type Props = {
  value: number;
  setValue: (value: number) => void;
};

export default function Toolbar({ value, setValue }: Props) {
  const theme = useTheme();
  const [openImportProduct, setOpenImportProduct] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleImportProduct = () => {
    setOpenImportProduct(false);
  };

  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" spacing={2}>
          <Typography>Overview</Typography>
          <Typography>{`>`}</Typography>
          <Typography>Manage Product</Typography>
        </Stack>
        <Stack direction="row">
          <Stack direction="row" justifyContent="flex-end" spacing={2}>
            <ManageTabs value={value} setValue={setValue} />
            <Button variant="contained" onClick={() => setOpenImportProduct(true)} size="large" 
              startIcon={<ShopifyIcon />} sx={{height:'100%'}}>
              Import product
            </Button>
          </Stack>
        </Stack>
      </Stack>

      <ImportProduct open={openImportProduct} isMobile={isMobile} onClose={handleImportProduct} />
    </>
  );
}

