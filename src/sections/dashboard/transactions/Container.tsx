import { useEffect, useState } from 'react';
import { Box, Stack } from '@mui/material';

import EmptyCard from './EmptyCard';
import EmptyTransactions from './EmptyTransactions';
import Title from './Title';

type Props = {
  title: string;
  children: React.ReactElement;
  state: number;
  viewTransaction: VoidFunction;
};

const SHOW_TRANSACTIONS = 4;

const Loading = () => {
  return (
    <Stack direction="column" sx={{ cursor: 'pointer' }}>
      {new Array(SHOW_TRANSACTIONS).fill(0).map((_, index) => (
        <EmptyCard key={index} />
      ))}
    </Stack>
  );
};

export default function Container({ title, children, state, viewTransaction }: Props) {
  const isLoading = state === 0;

  return (
    <Box sx={{ minHeight: '372px' }}>
      <Title title={title} loading={isLoading} />

      {state === 0 && <Loading />}

      {state === 1 && <EmptyTransactions onClick={viewTransaction} />}

      {state === 2 && children}
    </Box>
  );
}
