import { Button, Card, Stack, Typography } from '@mui/material';
import { DM_Mono } from '@next/font/google';

import Help from '@components/icons/Help';

import ModalHeader from './Header';

type Props = {
  title: string;
  wallet: string;
  children: React.ReactNode;
  needHelp?: boolean;
  onBack?: VoidFunction;
  onClose: VoidFunction;
};

const dmMono = DM_Mono({
  weight: '400',
  subsets: ['latin'],
});

export default function Modal({ title, wallet, needHelp, children, onBack, onClose }: Props) {
  return (
    <Card sx={{ padding: '12px' }} className={dmMono.className}>
      <ModalHeader
        title={title}
        wallet={wallet}
        middle={
          onBack && (
            <Button variant="text" sx={{ color: 'white' }} onClick={onBack}>
              {'< Back'}
            </Button>
          )
        }
        onClose={onClose}
      />

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
