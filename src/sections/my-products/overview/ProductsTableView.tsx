import React, { useMemo } from 'react';
import { Card, TableContainer, Paper, Stack, Chip, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import CardTable from '@components/table/CardTable';
import CustomTable from '@components/table/Table';
import ItemPrice from '@components/products/ItemPrice';
import Product from '@components/products/Product';
import Pagination from '@sections/sales-tracker/SalesTrackerPagination';

import { ProductOverview, TestStatus } from '../types';
import TestStatusChip from './TestStatusChip';

export default function ProductsTableView() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const columns = useMemo(
    () => [
      {
        id: 'product',
        label: isMobile ? '' : 'Product',
        render: (row: any) => (
          <Product
            title={row.name}
            logo={row.logo}
            url={row.url}
            sx={isMobile ? { padding: '12px 16px' } : {}}
          />
        ),
      },
      {
        id: 'price',
        label: 'Price',
        render: (row: any) => <ItemPrice price={row.price} />,
      },
      {
        id: 'salesToday',
        label: 'Sales Today',
        render: (row: any) => <ItemPrice price={row.salesToday} />,
      },
      {
        id: 'salesYesterday',
        label: 'Sales Yesterday',
        render: (row: any) => <ItemPrice price={row.salesYesterday} />,
      },
      {
        id: 'status',
        label: 'Status',
        render: (row: any) => <TestStatusChip status={row.status} />,
      },
    ],
    [isMobile]
  );

  return (
    <>
      {isMobile ? (
        <CardTable columns={columns} dataSource={dataSource} divider />
      ) : (
        <Card sx={{ padding: '24px' }}>
          <Stack spacing={2}>
            <Pagination sortBy={sortBy} />
            <TableContainer component={Paper}>
              <CustomTable columns={columns} dataSource={dataSource} sx={{ minWidth: 700 }} />
            </TableContainer>
          </Stack>
        </Card>
      )}
    </>
  );
}

const sortBy = [
  { id: 1, name: 'Saved date' },
  { id: 2, name: 'Unit sold' },
  { id: 3, name: 'Revenue day' },
  { id: 4, name: 'Last tracking' },
];

const dataSource: ProductOverview[] = new Array(5).fill(0).map((_, index) => ({
  id: index,
  name: 'Carrigan Tracksuit',
  url: 'www.voilondon.com',
  logo: '/assets/images/products/product-1.svg',
  savedDate: `${index + 2} Mar 2023`,
  lastTrack: '22 Mar 2023',
  price: 49.99,
  salesToday: 10992.99,
  salesYesterday: 10992.99,
  status: (index % 3) as TestStatus,
}));
