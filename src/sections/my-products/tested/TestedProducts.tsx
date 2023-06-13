import React, { useState } from 'react';
import {
  Card,
  TableContainer,
  Paper,
  Stack,
  Button,
  Typography,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';

import CountryChip from '@components/chips/CountryChip';
import WinnerIcon from '@components/icons/Winner';
import CardTable from '@components/table/CardTable';
import CustomTable from '@components/table/Table';
import WinnerModal from './WinnerModal';
import { TestedProduct } from '../types';

type Props = {
  title: string;
  products: TestedProduct[];
};

export default function TestedProductTable({ title, products }: Props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [showWinner, setShowWinner] = useState(false);

  const columns = [
    {
      id: 'url',
      label: 'URL',
    },
    {
      id: 'market',
      label: 'Market',
      render: ({ markets }: any) => (
        <>
          {markets?.length ? (
            <CountryChip code={markets[0].code} label={markets[0].value} />
          ) : (
            <Typography>Empty</Typography>
          )}
        </>
      ),
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
      label: 'Store',
      render: ({ store }: any) => <Typography>{store || 'Empty'}</Typography>,
    },
    {
      id: 'notes',
      label: 'notes',
      render: ({ notes }: any) => <Typography>{notes || 'Empty'}</Typography>,
    },
    {
      id: 'winner',
      label: 'winner',
      render: ({ notes }: any) => (
        <IconButton aria-label="winner" onClick={() => setShowWinner(true)}>
          <WinnerIcon />
        </IconButton>
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
        <CardTable columns={columns} dataSource={products} divider />
      ) : (
        <Card sx={{ padding: '24px' }}>
          <Stack spacing={2}>
            <Typography variant="subtitle1">{title}</Typography>
            <TableContainer component={Paper}>
              <CustomTable columns={columns} dataSource={products} sx={{ minWidth: 700 }} />
            </TableContainer>
          </Stack>
          <WinnerModal open={showWinner} onClose={() => setShowWinner(false)} />
        </Card>
      )}
    </>
  );
}
