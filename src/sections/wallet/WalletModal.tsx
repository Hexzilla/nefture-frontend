import { Box, Card, Grid } from '@mui/material';
import { m } from 'framer-motion';

import { DialogAnimate, MotionContainer } from '@components/animate';
import { Wallet, useWalletContext } from '@components/wallet';
import AddWallet from '@components/wallet/AddWallet';

import ActiveWallet from '@sections/wallet/ActiveWallet';
import getVariant from '@sections/_examples/extra/animate/getVariant';

type Props = {
  isMobile: boolean;
};

const createWallet = () => {
  return {
    title: 'User Wallet',
    address: '0x8eEf2750c37a7626868D86e583fdaB46494fAb38',
    status: 1,
    statusTitle: 'Check',
    value: 1123,
    progress: 1,
    approvals: 1,
  } as Wallet;
};

const ModalContent = ({ isMobile }: Props) => {
  const { activeWallet, setActiveWallet, modalType, openModal, closeModal } = useWalletContext();

  const onEnterWallet = () => {
    setActiveWallet(createWallet());
    openModal('View');
  };

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
          onEnterWallet={onEnterWallet}
          onConnectWallet={() => console.log('ConnectWallet')}
        />
      )}
      {modalType === 'View' && !!activeWallet && (
        <ActiveWallet onClose={closeModal} activeWallet={activeWallet} />
      )}
    </Card>
  );
};

export default function WalletModal({ isMobile }: Props) {
  const { modalType } = useWalletContext();

  if (isMobile) {
    return (
      <DialogAnimate fullWidth maxWidth="xs" open={!!modalType} variants={getVariant('bounceIn')}>
        <ModalContent isMobile={isMobile} />
      </DialogAnimate>
    );
  }

  return (
    <>
      {!!modalType && (
        <Grid item xs={12} lg={4}>
          <MotionContainer>
            <Box component={m.div} variants={getVariant('slideInRight')}>
              <ModalContent isMobile={isMobile} />
            </Box>
          </MotionContainer>
        </Grid>
      )}
    </>
  );
}
