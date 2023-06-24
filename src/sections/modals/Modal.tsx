import { Button, Card, Stack, Typography } from '@mui/material';
import { DM_Mono } from '@next/font/google';
import { useMemo } from 'react';

import Help from '@components/icons/Help';
import { useModalContext } from '@components/modals';

import ModalHeader from './Header';
import LeftArrow from '@components/icons/LeftArrow';

type Props = {
  title: string;
  wallet: string;
  children: React.ReactNode;
  needHelp?: boolean;
  onClose: VoidFunction;
};

const dmMono = DM_Mono({
  weight: '400',
  subsets: ['latin'],
});

export default function Modal({ title, wallet, needHelp, children, onClose }: Props) {
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
    <Card sx={{ padding: '12px' }} className={dmMono.className}>
      <ModalHeader title={title} wallet={wallet} middle={backButton} onClose={onClose} />

      {children}

      {!!needHelp && (
        <Stack alignItems="center" sx={{ padding: '10px 20px', marginTop: '12px' }}>
          <Stack direction="row" spacing={2}>
            <Help />
            <Typography color="gray">Need Help?</Typography>
          </Stack>
        </Stack>
      )}
    </Card>
  );
}
