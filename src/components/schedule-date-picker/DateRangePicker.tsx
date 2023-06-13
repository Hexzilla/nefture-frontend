import {
  Paper,
  Stack,
  Dialog,
  Button,
  DialogContent,
  FormHelperText,
  Typography,
  Divider,
  TextField,
  Box,
} from '@mui/material';
import { CalendarPicker } from '@mui/x-date-pickers';
import { format } from 'date-fns';

import useResponsive from '@hooks/useResponsive';
import { DateRangePickerProps } from './types';

export default function DateRangePicker({
  startDate,
  endDate,
  onChangeStartDate,
  onChangeEndDate,
  open,
  onClose,
  onSubmit,
  isError,
}: DateRangePickerProps) {
  const isDesktop = useResponsive('up', 'md');
  const isCalendarView = true;

  const yesterday = () => {
    let t = new Date();
    t.setDate(t.getDate() - 1);
    return t;
  };

  const handleScheduleDate = (type:String | null) => {
    const today = new Date();
    switch (type)
    {
      case 'today':
        onChangeStartDate(today)
        break
      case 'yesterday':
        onChangeStartDate(yesterday())
        break
      case 'thisweek':
        const firstDay = new Date(today.setDate(today.getDate() - today.getDay()));
        const lastDay = new Date(today.setDate(today.getDate() - today.getDay() + 6));
        onChangeStartDate(firstDay)
        onChangeEndDate(lastDay)
        break
      case 'lastweek':
        const firstDayOfLastWeek = new Date(today.setDate(today.getDate() - today.getDay() -7));
        const lastDayOfLastWeek = new Date(today.setDate(today.getDate() - today.getDay() + 6));
        onChangeStartDate(firstDayOfLastWeek)
        onChangeEndDate(lastDayOfLastWeek)
        break
      case 'thismonth':
        const firstDayOfThisMonth = new Date(today.getFullYear(), today.getMonth(), 1);
        const lastDayOfThisMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        onChangeStartDate(firstDayOfThisMonth)
        onChangeEndDate(lastDayOfThisMonth)
        break
      case 'lastmonth':
        const firstDayOfLastMonth= new Date(today.getFullYear(), today.getMonth()-1, 1);
        const lastDayOfLastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        onChangeStartDate(firstDayOfLastMonth)
        onChangeEndDate(lastDayOfLastMonth)
        break
      case 'thisyear':
        const firstDayOfThisYear = new Date(today.getFullYear(), 0, 1)
        const lastDayOfThisYear = new Date(today.getFullYear(), 11, 31)
        onChangeStartDate(firstDayOfThisYear)
        onChangeEndDate(lastDayOfThisYear)
        break
      case 'lastyear':
        const firstDayOfLastYear = new Date(today.getFullYear() -1, 0, 1)
        const lastDayOfLastYear = new Date(today.getFullYear() -1, 11, 31)
        onChangeStartDate(firstDayOfLastYear)
        onChangeEndDate(lastDayOfLastYear)
        break

    }
  };

  return (
    <Dialog
      fullWidth
      open={open}
      onClose={onClose}
      PaperProps={{ sx: { maxWidth: 'fit-content', width: 'fit-content' } }}
    >
      <DialogContent
        sx={{
          ...(isCalendarView &&
            isDesktop && {
              overflow: 'unset',
            }),
        }}
      >
        <div>
          <Stack direction="row" justifyContent="center" spacing={2}>
            <Stack direction="column" spacing={2} pt={3} sx={{cursor:'pointer'}}>
              <Typography variant="body1" onClick={() => handleScheduleDate('today')}>Today</Typography>
              <Typography variant="body1" onClick={() => handleScheduleDate('yesterday')}>Yesterday</Typography>
              <Typography variant="body1" onClick={() => handleScheduleDate('thisweek')}>This week</Typography>
              <Typography variant="body1" onClick={() => handleScheduleDate('lastweek')}>Last week</Typography>
              <Typography variant="body1" onClick={() => handleScheduleDate('thismonth')}>This month</Typography>
              <Typography variant="body1" onClick={() => handleScheduleDate('lastmonth')}>Last month</Typography>
              <Typography variant="body1" onClick={() => handleScheduleDate('thisyear')}>This year</Typography>
              <Typography variant="body1" onClick={() => handleScheduleDate('lastyear')}>Last year</Typography>
              <Typography variant="body1" onClick={() => handleScheduleDate('alltime')}>All time</Typography>
            </Stack>

            <Divider component="div" orientation="vertical" sx={{ height: 'auto' }} />

            <Stack direction="column">
              <Stack
                spacing={1}
                direction={isCalendarView && isDesktop ? 'row' : 'column'}
                justifyContent="center"
                sx={{
                  pt: 1,
                  '& .MuiCalendarPicker-root': {
                    ...(!isDesktop && {
                      width: 'auto',
                    }),
                  },
                }}
              >
                <Paper variant="outlined" sx={{ border: 'none' }}>
                  <CalendarPicker date={startDate} onChange={onChangeStartDate} />
                </Paper>

                <Divider component="div" orientation="vertical" />

                <Paper variant="outlined" sx={{ border: 'none' }}>
                  <CalendarPicker date={endDate} onChange={onChangeEndDate} />
                </Paper>
              </Stack>

              <Divider component="div" orientation="horizontal" />

              {isError && (
                <FormHelperText error sx={{ px: 2 }}>
                  End date must be later than start date
                </FormHelperText>
              )}

              <Stack direction="row" justifyContent="space-between" padding="16px">
                <Stack direction="row" alignItems="center" spacing={2}>
                  <TextField
                    variant="outlined"
                    size="small"
                    placeholder="Start date"
                    sx={{ maxWidth: '128px' }}
                    InputProps={{
                      readOnly: true,
                    }}
                    value={startDate ? format(startDate, 'dd MMM yyyy') : ''}
                  />
                  <Box component="div">-</Box>
                  <TextField
                    variant="outlined"
                    size="small"
                    placeholder="End date"
                    sx={{ maxWidth: '128px' }}
                    InputProps={{
                      readOnly: true,
                    }}
                    value={endDate ? format(endDate, 'dd MMM yyyy') : ''}
                  />
                </Stack>

                <Stack direction="row" spacing={2}>
                  <Button variant="outlined" color="inherit" onClick={onClose}>
                    Cancel
                  </Button>

                  <Button disabled={isError} variant="contained" onClick={onSubmit}>
                    Schedule
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// const StyledCalendarPicker = styled(CalendarPicker)(({ theme }) => ({
//   '& .MuiPickersCalendarHeader-root': {
//     position: 'relative',
//   },
//   '& .MuiPickersCalendarHeader-labelContainer': {
//     position: 'absolute',
//     left: '50%',
//     transform: 'translate(-40%, 0)'
//   },
//   '& .MuiPickersArrowSwitcher-root': {
//     display: 'flex',
//     justifyContent: 'space-between',
//     width: '100%',
//   },
// }));
