// @mui
import { Box, BoxProps } from '@mui/material';
// @type
import { IProduct } from '../../../../@types/product';
// components
import { SkeletonProductItem } from '../../../../components/skeleton';
//
import CreativeProductCard from './CreativeProductCard';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  products: IProduct[];
  loading: boolean;
}

export default function CreativeProductList({ products, loading, ...other }: Props) {
  return (
    <Box
      gap={3}
      display="grid"
      gridTemplateColumns={{
        xs: 'repeat(1, 1fr)',
        sm: 'repeat(2, 1fr)',
        md: 'repeat(3, 1fr)',
      }}
      // lg: 'repeat(3, 1fr)',
      {...other}
    >
      {(loading ? [...Array(12)] : products).map((product, index) =>
        product ? (
          <CreativeProductCard key={product.id} product={product} />
        ) : (
          <SkeletonProductItem key={index} />
        )
      )}
    </Box>
  );
}
