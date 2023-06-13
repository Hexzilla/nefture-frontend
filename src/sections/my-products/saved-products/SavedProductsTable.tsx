import React from 'react';
import {
  Card,
  TableContainer,
  Paper,
  Stack,
  Button,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { useSnackbar } from 'notistack';

import CalendarPlusIcon from '@components/icons/CalendarPlus';
import CoinsIcon from '@components/icons/Coins';
import ShoppingBagIcon from '@components/icons/ShoppingBag';
import { useDateRangePicker } from '@components/date-range-picker';
import ViewIcon from '@components/icons/View';
import DateRangePicker from '@components/schedule-date-picker/DateRangePicker';
import CardTable, { CardTableColumn } from '@components/table/CardTable';
import CustomTable from '@components/table/Table';
import Pagination from '@sections/sales-tracker/SalesTrackerPagination';
import { SavedProduct } from '../types';

export default function SavedProductsTable() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { enqueueSnackbar } = useSnackbar();
  const pickerCalendar = useDateRangePicker(new Date(), null);

  const onScheduleProduct = () => {
    pickerCalendar.onClose();

    enqueueSnackbar(`Product scheduled for 23 Mar, 2023`, {
      variant: 'success',
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right',
      },
    });
  };

  const columns: CardTableColumn[] = [
    {
      id: 'url',
      label: 'URL',
    },
    {
      id: 'ad',
      label: 'AD',
      render: () => (
        <Button variant="text" endIcon={<ViewIcon />}>
          View
        </Button>
      ),
    },
    {
      id: 'savedDate',
      label: 'Saved Date',
    },
    {
      id: 'lastTrack',
      label: 'Last Trackin',
    },
    {
      id: 'price',
      label: 'Price',
      render: (row: any) => `£${row.price.toFixed(2)}`,
    },
    {
      id: 'unitSold',
      label: 'Unit Sold',
      render: (row: any) => (
        <Stack direction="row" spacing="4px">
          <ShoppingBagIcon /> <span>{row.unitSold.toFixed(2)}</span>
        </Stack>
      ),
    },
    {
      id: 'revenue',
      label: 'Revenue',
      render: (row: any) => (
        <Stack direction="row" spacing="4px">
          <CoinsIcon /> <span>${row.revenue.toFixed(2)}</span>
        </Stack>
      ),
    },
    {
      id: 'trackedDays',
      label: 'Tracked For',
      render: (row: any) => `${row.trackedDays} days`,
    },
    !isMobile && {
      id: 'scheduled',
      label: 'Schedule',
      render: () => (
        <IconButton onClick={pickerCalendar.onOpen}>
          <CalendarPlusIcon />
        </IconButton>
      ),
    },
    !isMobile
      ? {
          id: '',
          align: 'right',
          render: () => (
            <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={2}>
              <Button variant="contained" size="small">
                Manage
              </Button>
            </Stack>
          ),
        }
      : {
          id: '',
          render: () => (
            <Stack direction="row" alignItems="center" spacing={2} sx={{ padding: '16px 10px' }}>
              <Button
                variant="outlined"
                color="inherit"
                fullWidth
                startIcon={<CalendarPlusIcon />}
                onClick={pickerCalendar.onOpen}
              >
                Schedule
              </Button>
              <Button variant="contained" fullWidth>
                Manage
              </Button>
            </Stack>
          ),
        },
  ].filter(Boolean) as CardTableColumn[];

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

      <DateRangePicker
        open={pickerCalendar.open}
        startDate={pickerCalendar.startDate}
        endDate={pickerCalendar.endDate}
        onChangeStartDate={pickerCalendar.onChangeStartDate}
        onChangeEndDate={pickerCalendar.onChangeEndDate}
        onClose={pickerCalendar.onClose}
        onSubmit={onScheduleProduct}
        isError={pickerCalendar.isError}
      />
    </>
  );
}

const sortBy = [
  { id: 1, name: 'Saved date' },
  { id: 2, name: 'Unit sold' },
  { id: 3, name: 'Revenue day' },
  { id: 4, name: 'Last tracking' },
];

const dataSource: SavedProduct[] = new Array(10).fill(0).map(
  (_, index) =>
    ({
      url: 'stubbleandco.com',
      savedDate: '15 Mar 2023',
      lastTrack: '22 Mar 2023',
      price: 159,
      unitSold: 6,
      revenue: 24,
      trackedDays: 4,
    } as any)
);
