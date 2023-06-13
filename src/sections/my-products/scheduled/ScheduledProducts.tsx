import React from 'react';
import { useTheme } from '@mui/material/styles';
import {
  Card,
  TableContainer,
  Paper,
  Stack,
  Button,
  Typography,
  useMediaQuery,
  Select,
  MenuItem,
} from '@mui/material';

import PersonAvatar from '@components/avatars/PersonAvatar';
import CountryChip from '@components/chips/CountryChip';
import CountryChipGroup from '@components/chips/CountryChipGroup';
import CardTable from '@components/table/CardTable';
import CustomTable from '@components/table/Table';
import Pagination from '@sections/sales-tracker/SalesTrackerPagination';
import { ProductStatus, ScheduledProduct } from '../types';
import StatusChip from './StatusChip';

export default function ScheduledProducts() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const columns = [
    {
      id: 'url',
      label: 'URL',
    },
    {
      id: 'date',
      label: 'Date',
    },
    {
      id: 'person',
      label: 'Person',
      render: ({ person }: any) => (
        <>{person ? <PersonAvatar name={person} /> : <Typography>Empty</Typography>}</>
      ),
    },
    {
      id: 'market',
      label: 'Market',
      render: ({ markets }: any) => {
        if (markets?.length === 1) {
          return <CountryChip code={markets[0].code} label={markets[0].value} />;
        }
        if (markets?.length > 1) {
          return <CountryChipGroup codes={markets.map((x: any) => x.code)} limit={3} />;
        }
        return <Typography>Empty</Typography>;
      },
    },
    {
      id: 'media',
      label: 'Media',
      render: ({ media }: any) => (
        <>{media ? <Button>{media}</Button> : <Typography>Empty</Typography>}</>
      ),
    },
    {
      id: 'store',
      label: 'store',
      render: ({ store }: any) => <Typography>{store || 'Empty'}</Typography>,
    },
    {
      id: 'status',
      label: 'Status',
      // render: ({ status }: any) => <StatusChip status={status} />,
      render: ({ status }: any) => (
        <Select
          label=""
          displayEmpty
          size="small"
          sx={{ width: 140, boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
          value={status}
        >
          {productStatus.map((item, index) => (
            <MenuItem key={index} value={item.id} sx={{ padding: '12px 20px' }}>
              <StatusChip status={item.id} label={item.label} />
            </MenuItem>
          ))}
        </Select>
      ),
    },
    {
      id: '',
      align: 'right',
      render: () => (
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={2}
          sx={isMobile ? { padding: '16px 10px' } : {}}
        >
          <Button variant="contained" size={isMobile ? 'large' : 'small'} fullWidth={isMobile}>
            Manage
          </Button>
        </Stack>
      ),
    },
  ];

  return (
    <>
      {isMobile ? (
        <CardTable columns={columns} dataSource={dataSource} divider />
      ) : (
        <Card sx={{ padding: '24px' }}>
          <Stack spacing={2}>
            <Pagination filters={filters} />
            <TableContainer component={Paper}>
              <CustomTable columns={columns} dataSource={dataSource} sx={{ minWidth: 700 }} />
            </TableContainer>
          </Stack>
        </Card>
      )}
    </>
  );
}

const filters = [
  { id: 1, name: 'Person' },
  { id: 2, name: 'Market' },
  { id: 3, name: 'Store' },
  { id: 4, name: 'Media' },
];

const productStatus = [
  { id: ProductStatus.EMPTY, label: 'Empty' },
  { id: ProductStatus.PROGRESS, label: 'In Progress' },
  { id: ProductStatus.READY, label: 'Ready' },
];

const dataSource: ScheduledProduct[] = new Array(10).fill(0).map(
  (_, index) =>
    ({
      name: `${index}`,
      logo: '',
      url: 'stubbleandco.com',
      date: '23 Mar 2023',
      person: 'Luke Dalton',
      markets: [{ code: 'IT', value: 'Italy' }],
      media: 'Facebook',
      status: ProductStatus.READY,
    } as ScheduledProduct)
);
