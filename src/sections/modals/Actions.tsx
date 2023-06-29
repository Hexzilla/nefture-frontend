import NeedHelp from '@components/modals/NeedHelp';
import { Button, Stack } from '@mui/material';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const Swipezor = dynamic(() => import('./Swipezor'), {
  ssr: false,
});

const mainButtonStyles = {
  borderRadius: '12px',
  bgcolor: 'primary.main',
  '&:hover': {
    bgcolor: 'primary.main',
  },
  width: '100%',
};

const blackButtonStyles = {
  borderRadius: '12px',
  bgcolor: 'common.black',
  '&:hover': {
    bgcolor: '#2965FF',
  },
  width: '100%',
};

type Props = {
  title: string;
  variant?: 'main' | 'black';
  swipe: boolean;
  help?: {
    tooltip: string;
    link: string;
  };
  onSubmit: VoidFunction;
};

export default function ModalActions({ title, variant, swipe, help, onSubmit }: Props) {
  const [arrowVisible, setArrowVisible] = useState('visible');

  return (
    <Stack mt={3} spacing={1}>
      <Button
        size="large"
        variant="contained"
        sx={variant === 'main' ? mainButtonStyles : blackButtonStyles}
        onClick={onSubmit}
      >
        {title}
      </Button>

      {!!swipe && (
        <Swipezor
          mainText="Swipe to Approve"
          overlayText="Approved"
          onSwipeDone={function () {
            setArrowVisible('hidden');
          }}
          arrowVisible={arrowVisible}
        />
      )}

      {!!help && <NeedHelp tooltip={help.tooltip} link={help.link} />}
    </Stack>
  );
}
