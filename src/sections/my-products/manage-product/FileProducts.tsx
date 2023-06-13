import { Box, Grid, Stack } from '@mui/material';
import React,{useState, useEffect} from 'react';

import Product from '@components/products/Product';
import StyledBox from '@components/atoms/StyledBox';
import StatusBar from './StatusBar';
import Toolbar from './Toolbar';
import RevenueGraph from './RevenueGraph';
import AdGraph from './AdGraph';
import { useDispatch, useSelector } from '../../../redux/store';
import { getProducts } from '../../../redux/slices/product';
import {
  ProductFileList
} from '../../@dashboard/e-commerce/shop';
import { useSettingsContext } from '../../../components/settings';
import { useForm } from 'react-hook-form';
import { IProduct, IProductFilter } from '../../../@types/product';
import orderBy from 'lodash/orderBy';

export default function FileProducts() {

  const { themeStretch } = useSettingsContext();

  const dispatch = useDispatch();

  const { products, checkout } = useSelector((state) => state.product);

  const [openFilter, setOpenFilter] = useState(false);

  const defaultValues = {
    gender: [],
    category: 'All',
    colors: [],
    priceRange: [0, 200],
    rating: '',
    sortBy: 'featured',
  };

  const methods = useForm<IProductFilter>({
    defaultValues,
  });

  const {
    reset,
    watch,
    formState: { dirtyFields },
  } = methods;

  const isDefault =
    (!dirtyFields.gender &&
      !dirtyFields.category &&
      !dirtyFields.colors &&
      !dirtyFields.priceRange &&
      !dirtyFields.rating) ||
    false;

  const values = watch();

  const dataFiltered = applyFilter(products, values);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);


  return (
    <>
      <ProductFileList products={dataFiltered} loading={!products.length && isDefault} />
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
    </>
  );
}

function applyFilter(products: IProduct[], filters: IProductFilter) {
  const { gender, category, colors, priceRange, rating, sortBy } = filters;

  const min = priceRange[0];

  const max = priceRange[1];

  // SORT BY
  if (sortBy === 'featured') {
    products = orderBy(products, ['sold'], ['desc']);
  }

  if (sortBy === 'newest') {
    products = orderBy(products, ['createdAt'], ['desc']);
  }

  if (sortBy === 'priceDesc') {
    products = orderBy(products, ['price'], ['desc']);
  }

  if (sortBy === 'priceAsc') {
    products = orderBy(products, ['price'], ['asc']);
  }

  // FILTER PRODUCTS
  if (gender.length) {
    products = products.filter((product) => gender.includes(product.gender));
  }

  if (category !== 'All') {
    products = products.filter((product) => product.category === category);
  }

  if (colors.length) {
    products = products.filter((product) => product.colors.some((color) => colors.includes(color)));
  }

  if (min !== 0 || max !== 200) {
    products = products.filter((product) => product.price >= min && product.price <= max);
  }

  if (rating) {
    products = products.filter((product) => {
      const convertRating = (value: string) => {
        if (value === 'up4Star') return 4;
        if (value === 'up3Star') return 3;
        if (value === 'up2Star') return 2;
        return 1;
      };
      return product.totalRating > convertRating(rating);
    });
  }

  return products;
}