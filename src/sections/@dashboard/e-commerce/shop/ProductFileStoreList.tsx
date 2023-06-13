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
  Box,
} from '@mui/material';
import { useSnackbar } from 'notistack';

import CalendarPlusIcon from '@components/icons/CalendarPlus';
import CoinsIcon from '@components/icons/Coins';
import ShoppingBagIcon from '@components/icons/ShoppingBag';
import { useDateRangePicker } from '@components/date-range-picker';
import ViewIcon from '@components/icons/ViewBlack';
import Trash from '@components/icons/Trash';
import DateRangePicker from '@components/schedule-date-picker/DateRangePicker';
import CardTable, { CardTableColumn } from '@components/table/CardTable';
import CustomTable from '@components/table/Table';
import Pagination from '@sections/sales-tracker/SalesTrackerPagination';
import { SavedProduct } from '@sections/my-products/types';

export default function ProductFileStoreList() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { enqueueSnackbar } = useSnackbar();
  const pickerCalendar = useDateRangePicker(new Date(), null);

  const onScheduleProduct = () => {
    pickerCalendar.onClose();

    enqueueSnackbar(`Product Removed successfully`, {
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
      label: '',
      render: () => (
        <Box sx={{float:'right'}}>
        <Button  endIcon={<ViewIcon />} sx={{minWidth:'0px'}}>
        </Button>
        <Button endIcon={<Trash />} sx={{minWidth:'0px'}} onClick={onScheduleProduct}>
        </Button>
        </Box>
      ),
    },
  ].filter(Boolean) as CardTableColumn[];

  return (
    <>
      {isMobile ? (
        <CardTable columns={columns} dataSource={dataSource} divider />
      ) : (
        <Stack spacing={2} justifyContent="space-between">
          <TableContainer component={Paper} sx={{borderRadius:'8px'}}>
            <CustomTable columns={columns} dataSource={dataSource} sx={{ minWidth: 700 }} />
          </TableContainer>
        </Stack>
      )}
    </>
  );
}
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
