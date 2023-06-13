import React from 'react';
import { styled } from '@mui/material/styles';
import { TableContainer, Paper, Stack, Button, IconButton } from '@mui/material';
import { useSnackbar } from 'notistack';

import Iconify from '@components/iconify';
import CheckedIcon from '@components/icons/Checked';
import HeartIcon from '@components/icons/Heart';
import CloseIcon from '@components/icons/Close';
import CustomTable from '@components/table/Table';
import Product from '@components/products/Product';

const StyledButton = styled(Button)(({ theme }) => ({
  minWidth: '84px',
}));

export default function SalesTrackerTable() {
  const { enqueueSnackbar } = useSnackbar();

  const saveProduct = (product: any) => {
    enqueueSnackbar(`Saved to My Products!`, {
      variant: 'success',
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right',
      },
    });
  };

  const removeProduct = (product: any) => {
    enqueueSnackbar(`Removed from My Products!`, {
      variant: 'success',
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right',
      },
    });
  };

  const columns = [
    {
      id: 'navigate',
      label: ' ',
      render: () => <Iconify icon="eva:chevron-right-outline" width={26} />,
    },
    {
      id: 'product',
      label: 'Product',
      render: ({ product }: any) => (
        <Product title={product.name} logo={product.logo} url={product.url} />
      ),
    },
    {
      id: 'price',
      label: 'Price',
      render: (row: any) => `£${row.price.toFixed(2)}`,
    },
    {
      id: 'salesToday',
      label: 'Sales Today',
      render: (row: any) => `£${row.salesToday.toFixed(2)}`,
    },
    {
      id: 'salesYesterday',
      label: 'Sales Yesterday',
      render: (row: any) => `£${row.salesYesterday.toFixed(2)}`,
    },
    {
      id: 'sales7Days',
      label: 'Sales 7 Days',
      render: (row: any) => `£${row.sales7Days.toFixed(2)}`,
    },
    {
      id: 'action',
      label: ' ',
      render: (row: any) => (
        <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={2}>
          <StyledButton
            variant="contained"
            size="small"
            startIcon={row.saved ? <CheckedIcon /> : <HeartIcon />}
            onClick={() => saveProduct(row.product)}
          >
            {row.saved ? 'Saved' : 'Save'}
          </StyledButton>
          <IconButton onClick={() => removeProduct(row.product)}>
            <CloseIcon />
          </IconButton>
        </Stack>
      ),
    },
  ];

  return (
    <TableContainer component={Paper}>
      <TableContainer component={Paper}>
        <CustomTable columns={columns} dataSource={dataSource} sx={{ minWidth: 700 }} />
      </TableContainer>
    </TableContainer>
  );
}

function createData(
  name: any,
  price: number,
  salesToday: number,
  salesYesterday: number,
  sales7Days: number,
  saved: boolean
) {
  return {
    product: { name, url: 'www.voilondon.com', logo: '/assets/images/products/product-1.svg' },
    price,
    salesToday,
    salesYesterday,
    sales7Days,
    saved,
  };
}

const dataSource = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, false),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, true),
  createData('Eclair', 262, 16.0, 24, 6.0, false),
  createData('Cupcake', 305, 3.7, 67, 4.3, true),
  createData('Gingerbread', 356, 16.0, 49, 3.9, true),
];
