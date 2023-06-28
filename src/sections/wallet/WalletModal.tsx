import { Box, Card, Grid, Stack } from '@mui/material';
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
    <Stack
      sx={{
        padding: isMobile ? '0px 20px' : '20px',
        width: '100%',
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
    </Stack>
  );
};

export default function WalletModal({ isMobile }: Props) {
  const { modalType } = useWalletContext();

  if (isMobile) {
    return <ModalContent isMobile={isMobile} />;
  }

  return (
    <>
      {!!modalType && (
        <Grid item xs={12} lg={4}>
          <MotionContainer>
            <Box component={m.div} variants={getVariant('slideInRight')}>
              <Card>
                <ModalContent isMobile={isMobile} />
              </Card>
            </Box>
          </MotionContainer>
        </Grid>
      )}
    </>
  );
}
