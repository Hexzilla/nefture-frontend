import { useEffect, useState } from 'react';
import { Box, Stack } from '@mui/material';

import EmptyCard from './EmptyCard';
import EmptyTransactions from './EmptyTransactions';
import Title from './Title';

type Props = {
  title: string;
  children: React.ReactElement;
};

const SHOW_TRANSACTIONS = 4;

const Loading = () => {
  return (
    <Stack direction="column" spacing="10px" sx={{ cursor: 'pointer' }}>
      {new Array(SHOW_TRANSACTIONS).fill(0).map((_, index) => (
        <EmptyCard key={index} />
      ))}
    </Stack>
  );
};

export default function Container({ title, children }: Props) {
  const [state, setState] = useState(0);
  const isLoading = state === 0;

  useEffect(() => {
    const timer = setTimeout(() => {
      setState(1);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box sx={{ minHeight: '372px' }}>
      <Title title={title} loading={isLoading} />

      {state === 0 && <Loading />}

      {state === 1 && <EmptyTransactions onClick={() => setState(2)} />}

      {state === 2 && children}
    </Box>
  );
}
