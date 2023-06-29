import { Box, Card, Dialog, Grid } from '@mui/material';
import { m } from 'framer-motion';

import { MotionContainer } from '@components/animate';
import { Wallet, useWalletContext } from '@components/wallet';
import AddWallet from '@components/wallet/AddWallet';

import getVariant from '@sections/_examples/extra/animate/getVariant';
import ActiveWallet from '@sections/wallet/ActiveWallet';

type Props = {
  isMobile: boolean;
};

const createWallet = () => {
  return {
    id: 0,
    title: 'User Wallet',
    address: '0x8eEf2750c37a7626868D86e583fdaB46494fAb38',
    status: 0,
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
        <ActiveWallet onClose={closeModal} wallet={activeWallet} />
      )}
    </Card>
  );
};

export default function WalletModal({ isMobile }: Props) {
  const { modalType } = useWalletContext();

  if (isMobile) {
    return (
      <Dialog fullWidth maxWidth="xs" open={!!modalType}>
        <ModalContent isMobile={isMobile} />
      </Dialog>
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
