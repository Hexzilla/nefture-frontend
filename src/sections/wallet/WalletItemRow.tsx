import { useState } from 'react';
import { Box, Card, CircularProgress, IconButton, Stack, Typography } from '@mui/material';

import EthereumSmallIcon from '@components/icons/EthereumSmallIcon';
import PencilGray from '@components/icons/PencilGray';
import { Wallet, useWalletContext } from '@components/wallet';
import Iconify from '@components/iconify/Iconify';
import AlertItem from '@components/wallet/AlertItem';
import useResponsive from '@hooks/useResponsive';

import ChangeWalletDialog from './ChangeWalletDialog';

type Props = {
  wallet: Wallet;
};

export default function WalletItemRow({ wallet }: Props) {
  const isMobile = useResponsive('down', 'sm');
  const COLORS = ['error', 'warning', 'success'] as const;
  const { modalType, openModal, setActiveWallet } = useWalletContext();
  const [walletName, setWalletname] = useState(wallet.title);
  const [open, setOpen] = useState(false);

  const styles = {
    '&:hover': {
      backgroundColor: 'rgba(145,158,171,0.08)',
    },
  };

  const circleStyle = {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'gray',
    borderRadius: '50%',
    height: '50px',
    backgroundColor: '#3f3f3f',
    position: 'relative',
  };

  const handleSelectWallet = () => {
    openModal('View');
    setActiveWallet(wallet);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card sx={styles} onClick={handleSelectWallet}>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
          sx={{ padding: '10px 20px', cursor: 'pointer' }}
        >
          <Stack direction="row" spacing={2} alignItems={'center'} sx={{ width: '160px' }}>
            <EthereumSmallIcon />
            <Stack
              direction="column"
              sx={{ marginLeft: '8px!important', marginRight: '-8px!important' }}
            >
              <Typography
                sx={{
                  maxWidth: '80px',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                }}
              >
                {walletName}
              </Typography>
              {isMobile && (
                <Typography color={'gray'} fontSize={'12px'}>
                  0xebC73...8D0B2
                </Typography>
              )}
            </Stack>
            {!isMobile && (
              <Box onClick={() => setOpen(true)}>
                <PencilGray />
              </Box>
            )}
          </Stack>
          {/* onClick={() => copyToClipboard('0xebC7393039298D0B2')} */}
          {!isMobile && (
            <Stack direction="row" spacing={2} alignItems={'center'}>
              <Typography>0xebC73...8D0B2</Typography>
              <IconButton>
                <Iconify icon="eva:copy-fill" width={20} />
              </IconButton>
            </Stack>
          )}
          <Stack
            direction="row"
            justifyContent="space-between"
            spacing={2}
            style={{ minWidth: '140px' }}
            alignItems={'center'}
            onClick={handleSelectWallet}
          >
            {wallet.status === 0 && (
              <Card>
                <Typography m={1.5}>Launch Check</Typography>
              </Card>
            )}
            {wallet.status !== 0 && (
              <>
                <Typography sx={{ color: `${COLORS[wallet.status - 1]}.main` }}>
                  {wallet.statusTitle}
                </Typography>
                <Box sx={circleStyle}>
                  <CircularProgress
                    color={COLORS[wallet.status - 1]}
                    variant="determinate"
                    value={95}
                    size={48}
                  />
                  <Typography sx={{ position: 'absolute', top: '30%', left: '31%' }}>97</Typography>
                </Box>
              </>
            )}
          </Stack>
          {!isMobile && !modalType && (
            <>
              <AlertItem title="Weekly Reports" type={0} />
              <AlertItem title="Real-time Alerts" type={0} />
            </>
          )}
          {!isMobile && (
            <Stack direction="row" spacing={2} alignItems={'center'}>
              <Card sx={{ borderColor: 'primary.main' }}>
                <Typography m={1.5}>Wallet 1</Typography>
              </Card>
            </Stack>
          )}
        </Stack>
      </Card>
      <ChangeWalletDialog
        open={open}
        handleClose={handleClose}
        onChange={setWalletname}
        walletName={walletName}
      />
    </>
  );
}
