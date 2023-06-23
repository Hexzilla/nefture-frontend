import { Box, Card, Grid } from '@mui/material';
import { m } from 'framer-motion';

import { DialogAnimate, MotionContainer } from '@components/animate';
import { useWalletContext } from '@components/wallet';
import AddWallet from '@components/wallet/AddWallet';

import ActiveWallet from '@sections/wallet/ActiveWallet';
import getVariant from '@sections/_examples/extra/animate/getVariant';

type Props = {
  isMobile: boolean;
  visibility: boolean;
};

const ModalContent = ({ isMobile }: Props) => {
  const { activeWallet, modalType, closeModal } = useWalletContext();

  return (
    <Card
      sx={{
        padding: isMobile ? '12px' : '20px',
        minHeight: '80vh',
        marginBottom: '1em',
        overflow: 'auto',
      }}
    >
      {modalType === 'New' && (
        <AddWallet
          onClose={closeModal}
          onEnterWallet={() => console.log('EnterWallet')}
          onConnectWallet={() => console.log('ConnectWallet')}
        />
      )}
      {modalType === 'View' && !!activeWallet && (
        <ActiveWallet onClose={closeModal} activeWallet={activeWallet} />
      )}
    </Card>
  );
};

export default function WalletModal({ isMobile, visibility }: Props) {
  const { modalType } = useWalletContext();
  console.log('isMobile', isMobile);

  if (isMobile) {
    return (
      <DialogAnimate fullWidth maxWidth="xs" open={!!modalType} variants={getVariant('bounceIn')}>
        <ModalContent isMobile={isMobile} visibility={visibility} />
      </DialogAnimate>
    );
  }

  return (
    <Grid item xs={12} lg={4} sx={{display:visibility?'block':'none'}}>
      <MotionContainer>
        <Box component={m.div} variants={getVariant('slideInRight')}>
          <ModalContent isMobile={isMobile} visibility={visibility} />
        </Box>
      </MotionContainer>
    </Grid>
  );
}
