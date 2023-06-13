import React, { useState } from 'react';
import {
  Select,
  Grid,
  Button,
  Stack,
  Typography,
  MenuItem,
  TextField,
  Checkbox,
  ListItemText,
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Iconify from '@components/iconify/Iconify';
import SortByIcon from '@components/icons/SortBy';
import FilterIcon from '@components/icons/Filter';

const StyledButton = styled(Button)(() => ({
  width: '36px',
  minWidth: '36px',
  height: '36px',
  padding: '2px',
}));

type Option = {
  id: number;
  name: string;
};

export type Props = {
  sortBy?: Option[];
  filters?: Option[];
};

export default function SalesTrackerPagination({ sortBy, filters }: Props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [size, setSize] = useState('25');

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={5}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Typography>Viewing</Typography>
          <Select
            id="page-size"
            label=""
            value={size}
            onChange={(e: any) => setSize(e.target.value)}
            sx={{ width: 72, height: 36 }}
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={25}>25</MenuItem>
            <MenuItem value={50}>50</MenuItem>
            <MenuItem value={100}>100</MenuItem>
          </Select>
          <Typography>of 245 results</Typography>
        </Stack>
      </Grid>

      <Grid item xs={12} md={7}>
        <Stack
          direction={isMobile ? 'row-reverse' : 'row'}
          justifyContent={isMobile ? 'space-between' : 'flex-end'}
          alignItems="center"
          spacing={2}
        >
          {sortBy && sortBy.length > 0 && (
            <Select
              label=""
              displayEmpty
              size="small"
              sx={{ width: 140 }}
              renderValue={(selected: number | undefined) => {
                if (selected) {
                  return sortBy.find((x) => x.id === selected)?.name;
                }
                return (
                  <Stack direction="row" alignItems="center" spacing={1} sx={{ paddingTop: '2px' }}>
                    <SortByIcon />
                    <Typography sx={{ paddingTop: '1px' }}>Sort by</Typography>
                  </Stack>
                );
              }}
            >
              {sortBy.map((item, index) => (
                <MenuItem key={index} value={item.id} sx={{ padding: '12px 20px' }}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          )}
          {filters && filters.length > 0 && (
            <Select
              multiple
              label=""
              displayEmpty
              size="small"
              sx={{ width: 140 }}
              value={[] as any}
              renderValue={() => {
                return (
                  <Stack direction="row" alignItems="center" spacing={1} sx={{ paddingTop: '2px' }}>
                    <FilterIcon />
                    <Typography>Filter</Typography>
                  </Stack>
                );
              }}
            >
              {filters.map((item, index) => (
                <MenuItem key={index} value={item.id} sx={{ padding: '12px 4px' }}>
                  <Checkbox />
                  <ListItemText primary={item.name} />
                </MenuItem>
              ))}
            </Select>
          )}
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography>Page</Typography>
            <TextField label="" value={1} size="small" sx={{ width: 36 }} />
            <Typography>of 26</Typography>
            <StyledButton color="inherit" variant="outlined">
              <Iconify icon="eva:chevron-left-outline" width={26} />
            </StyledButton>
            <StyledButton color="inherit" variant="outlined">
              <Iconify icon="eva:chevron-right-outline" width={26} />
            </StyledButton>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
}
