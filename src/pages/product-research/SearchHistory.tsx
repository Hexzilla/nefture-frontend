import React from 'react';
import { Card, Chip, Box, Stack, Typography } from '@mui/material';

import CountryChip from '@components/chips/CountryChip';
import ActiveAdsChip from '@components/research/ActiveAdsChip';
import SerachButton from '@components/research/SearchButton';

const SerachDate = ({ date }: { date: string }) => (
  <Stack direction="row" alignItems="center" spacing={2}>
    <Box sx={{ width: 32, height: 32, bgcolor: '#EEEDF2', padding: '8px', borderRadius: '8px' }}>
      <Box
        component="img"
        src="/assets/icons/research/search.svg"
        sx={{ width: 16, height: 16, color: 'black' }}
      />
    </Box>
    <Typography>{date}</Typography>
  </Stack>
);

const SearchItem = ({ item }: any) => (
  <Card
    sx={{
      p: 3,
      borderColor: 'grey.200',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderRadius: 1,
    }}
  >
    <Stack direction="column" spacing={3}>
      <Stack direction="row" justifyContent="space-between">
        <SerachDate date={item.date} />
        <SerachButton>Search Again</SerachButton>
      </Stack>
      <Stack direction="row" spacing={1}>
        {(item.filters || []).map((it: any, idx: number) => (
          <>
            {it.type === 'country' && <CountryChip key={idx} code={it.code} label={it.value} />}
            {it.type === 'ads' && <ActiveAdsChip key={idx} label={it.value} />}
            {it.type === 'keyword' && <Chip label={it.value} />}
          </>
        ))}
      </Stack>
    </Stack>
  </Card>
);

export default function SearchHistory() {
  return (
    <Stack spacing={3}>
      {items.map((item: any, idx: number) => (
        <SearchItem key={idx} item={item} />
      ))}
    </Stack>
  );
}

const items = [
  {
    date: '26 March - 14:28 PM',
    filters: [
      { type: 'country', code: 'IT', value: 'Italy' },
      { type: 'country', code: 'US', value: 'United States' },
      { type: 'keyword', value: 'Offer' },
      { type: 'ads', value: '50' },
    ],
  },
  {
    date: '24 March - 17:33 PM',
    filters: [
      { type: 'country', code: 'IT', value: 'Italy' },
      { type: 'country', code: 'US', value: 'United States' },
      { type: 'keyword', value: 'Offer' },
      { type: 'ads', value: '50' },
    ],
  },
];
