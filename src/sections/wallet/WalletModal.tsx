import { Box, Grid } from '@mui/material';
import { m } from 'framer-motion';

import { DialogAnimate, MotionContainer } from '@components/animate';
import { useWalletContext } from '@components/wallet';
import AddWallet from '@components/wallet/AddWallet';

import ActiveWallet from '@sections/wallet/ActiveWallet';
import getVariant from '@sections/_examples/extra/animate/getVariant';

type Props = {
  isMobile: boolean;
};

const ModalContent = () => {
  const { activeWallet, modalType, closeModal } = useWalletContext();

  console.log('modalType', modalType);
  return (
    <>
      {modalType === 'New' && (
        <AddWallet
          onClose={closeModal}
          onEnterWallet={() => console.log('EnterWallet')}
          onConnectWallet={() => console.log('ConnectWallet')}
        />
      )}
      {modalType === 'View' && !!activeWallet && (
        <ActiveWallet
          onClose={closeModal}
          copyToClipboard={() => console.log('copyToClipboard')}
          activeWallet={activeWallet}
        />
      )}
    </>
  );
};

export default function WalletModal({ isMobile }: Props) {
  const { modalType } = useWalletContext();
  console.log('isMobile', isMobile);

  if (isMobile) {
    return (
      <DialogAnimate fullWidth maxWidth="xs" open={!!modalType} variants={getVariant('bounceIn')}>
        <ModalContent />
      </DialogAnimate>
    );
  }

  return (
    <Grid item xs={12} lg={4}>
      <MotionContainer>
        <Box component={m.div} variants={getVariant('slideInRight')}>
          <ModalContent />
        </Box>
      </MotionContainer>
    </Grid>
  );
}
