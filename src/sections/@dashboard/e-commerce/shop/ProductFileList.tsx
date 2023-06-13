// @mui
import { Box, BoxProps, Card, Divider, Stack, Chip } from '@mui/material';
// @type
import { IProduct } from '../../../../@types/product';
// components
import { SkeletonProductItem } from '../../../../components/skeleton';
//
import ProductFileCard from './ProductFileCard';
//
import ProductFileTabs from './ProductFileTabs';
import React, { useState } from 'react';
import FrontImageButton from '@components/atoms/FrontImageButton';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  products: IProduct[];
  loading: boolean;
}

export default function ProductFileList({ products, loading, ...other }: Props) {

  const [activeTab, setActiveTab] = useState(0);

  return (
    <Card
      sx={{
        '&:hover .add-cart-btn': {
          opacity: 1,
        },
        padding:"16px"
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <ProductFileTabs value={activeTab} setValue={setActiveTab}/>
        {(activeTab === 0) && <FrontImageButton text="Upload file" sx={{fontSize:"14px", marginTop:"1px!important", fontWeight: 'bold'}} 
          icon="eva:plus-square-outline" iconSize={20}/>}
        {(activeTab === 1) && <FrontImageButton text="Add URL" sx={{fontSize:"14px", marginTop:"1px!important", fontWeight: 'bold'}} 
          icon="eva:plus-square-outline" iconSize={20}/>}
        
      </Stack>
      <Divider />
      <Box
        mt={3}
        gap={3}
        display="grid"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
        }}
        // lg: 'repeat(4, 1fr)',
        {...other}
      >
        {(activeTab === 0) &&
          (loading ? [...Array(12)] : products).map((product, index) =>
            product ? (
              <ProductFileCard key={product.id} product={product} />
            ) : (
              <SkeletonProductItem key={index} />
            )
          )
        }
      </Box>
    </Card>
  );
}
