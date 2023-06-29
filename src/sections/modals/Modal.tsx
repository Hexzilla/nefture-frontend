import { Button, Card, CardActions, CardContent } from '@mui/material';
import { DM_Mono } from '@next/font/google';
import React, { useMemo } from 'react';

import ModalHeader from './Header';
import LeftArrow from '@components/icons/LeftArrow';

type Props = {
  title: string;
  wallet: string;
  showBackButton?: boolean;
  children: React.ReactNode;
  actions?: React.ReactNode;
  onClose: VoidFunction;
};

const dmMono = DM_Mono({
  weight: '400',
  subsets: ['latin'],
});

export default function Modal({ title, wallet, showBackButton, actions, children, onClose }: Props) {
  const backButton = useMemo(() => {
    if (showBackButton) {
      return (
        <Button variant="text" sx={{ color: 'white' }} onClick={() => console.log(0)}>
          <LeftArrow /> Go back
        </Button>
      );
    }
  }, [showBackButton]);

  return (
    <Card
      sx={{
        padding: '12px',
        minHeight: `calc(100vh - 100px)`,
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
