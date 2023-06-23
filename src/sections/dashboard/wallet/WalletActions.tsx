import { Button, Stack } from '@mui/material';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const Swipezor = dynamic(() => import('./Swipezor'), {
  ssr: false,
});

const styles = {
  borderRadius: '12px',
  bgcolor: 'common.black',
  '&:hover': {
    bgcolor: '#2965FF',
  },
};

type Props = {
  title: string;
  swipe: boolean;
  onSubmit: VoidFunction;
};

export default function WalletActions({ title, swipe, onSubmit }: Props) {
  const [arrowVisible, setArrowVisible] = useState('visible');

  return (
    <Stack mt={3} spacing={1}>
      <Button size="large" variant="contained" sx={styles} onClick={onSubmit}>
        {title}
      </Button>

      {swipe && (
        <Swipezor
          mainText="Swipe to Approve"
          overlayText="Approved"
          onSwipeDone={function () {
            setArrowVisible('hidden');
          }}
          arrowVisible={arrowVisible}
        />
      )}
    </Stack>
  );
}
