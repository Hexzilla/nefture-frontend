import { Button, Stack } from '@mui/material';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const Swipezor = dynamic(() => import('./Swipezor'), {
  ssr: false,
});

const buttonSX = {
  width: '100%',
  backgroundColor: 'black',
  marginTop: '12px',
  '&:hover': {
    backgroundColor: '#2965FF',
  },
};

export default function DialogAction() {
  const [arrowVisible, setArrowVisible] = useState('visible');

  return (
    <Stack mt={3} spacing={1}>
      <Button href="/" size="large" variant="contained" sx={buttonSX}>
        Go to Home
      </Button>

      <Swipezor
        mainText="Swipe to Approve"
        overlayText="Approved"
        onSwipeDone={function () {
          setArrowVisible('hidden');
        }}
        arrowVisible={arrowVisible}
      />
    </Stack>
  );
}
