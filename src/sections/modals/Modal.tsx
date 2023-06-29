import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Link,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import { DM_Mono } from '@next/font/google';
import NextLink from 'next/link';
import React, { useMemo } from 'react';

import Help from '@components/icons/Help';
import { useModalContext } from '@components/modals';

import ModalHeader from './Header';
import LeftArrow from '@components/icons/LeftArrow';
import { Box } from '@mui/system';

type Props = {
  title: string;
  wallet: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
  onClose: VoidFunction;
};

const dmMono = DM_Mono({
  weight: '400',
  subsets: ['latin'],
});

export default function Modal({ title, wallet, actions, children, onClose }: Props) {
  const { page, setPage } = useModalContext();

  const backButton = useMemo(() => {
    if (page > 0) {
      return (
        <Button variant="text" sx={{ color: 'white' }} onClick={() => setPage(0)}>
          <LeftArrow /> Go back
        </Button>
      );
    }
  }, [page]);

  return (
    <Card
      sx={{
        padding: '12px',
        minHeight: 'calc(100vh - 100px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
      className={dmMono.className}
    >
      <CardContent sx={{ padding: 0 }}>
        <ModalHeader title={title} wallet={wallet} middle={backButton} onClose={onClose} />
        {children}
      </CardContent>

      {actions && <CardActions sx={{ display: 'block' }}>{actions}</CardActions>}
    </Card>
  );
}
