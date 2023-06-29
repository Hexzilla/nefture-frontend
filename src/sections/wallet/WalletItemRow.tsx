import { useMemo, useState } from 'react';
import {
  Box,
  Card,
  CircularProgress,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

import EthereumSmallIcon from '@components/icons/EthereumSmallIcon';
import PencilGray from '@components/icons/PencilGray';
import { Wallet, useWalletContext } from '@components/wallet';
import Iconify from '@components/iconify/Iconify';
import AlertItem from '@components/wallet/AlertItem';
import useResponsive from '@hooks/useResponsive';

import useCopyToClipboard from '@hooks/useCopyToClipboard';
import { useSnackbar } from 'notistack';

type Props = {
  wallet: Wallet;
};

export default function WalletItemRow({ wallet }: Props) {
  const isDesktop = useResponsive('up', 'lg');
  const isMobile = useResponsive('down', 'md');
  const isHideAlerts = useResponsive('down', 1020);
  const COLORS = ['error', 'warning', 'success'] as const;
  const { modalType, openModal, activeWallet, setActiveWallet, setWalletName } = useWalletContext();
  const { copy } = useCopyToClipboard();
  const { enqueueSnackbar } = useSnackbar();
  const [edit, setEdit] = useState(false);

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

  const handleWalletNameChange = (name: string) => {
    if (wallet.id) {
      setWalletName(wallet.id, name);
    }
  };

  const handleSelectWallet = () => {
    if (modalType === 'View' && wallet.id === activeWallet?.id) {
      openModal(null);
      setActiveWallet(null);
    } else {
      openModal('View');
      setActiveWallet(wallet);
    }
  };

  const handleKeyInput = (e: any) => {
    if (e.keyCode === 13) {
      setEdit(false);
    }
  };

  const openEditDialog = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setEdit(true);
  };

  const copyToClipboard = (content: string) => {
    copy(content);
    enqueueSnackbar('Copied!');
  };

  const copyWalletAddress = (e: any) => {
    e.stopPropagation();
    copyToClipboard(walletAddress);
  };

  const walletAddress = useMemo(() => {
    const address = wallet.address;
    return address.substring(0, 7) + '...' + address.slice(address.length - 5);
  }, [wallet.address]);

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
            <Box component="img" src="/assets/icons/nefture/ic_ethereum_small.svg" />
            <Stack
              direction="column"
              sx={{ marginLeft: '8px!important', marginRight: '-8px!important' }}
            >
              <Typography
                sx={{
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                }}
                display={edit ? 'none' : 'inherit'}
              >
                {wallet.title}
              </Typography>
              <TextField
                defaultValue={wallet.title}
                sx={{
                  display: edit ? 'inherit' : 'none',
                  maxWidth: '96px',
                }}
                inputProps={{ maxLength: 12 }}
                onKeyDown={handleKeyInput}
                onChange={(e) => handleWalletNameChange(e.target.value)}
              />
              {!isDesktop && (
                <Typography color={'gray'} fontSize={'12px'}>
                  {walletAddress}
                </Typography>
              )}
            </Stack>

            {!isMobile && (
              <Box onClick={(event) => openEditDialog(event)}>
                <PencilGray />
              </Box>
            )}
          </Stack>

          {isDesktop && (
            <Stack direction="row" spacing={2} alignItems={'center'}>
              <Typography>{walletAddress}</Typography>
              <IconButton onClick={(event) => copyWalletAddress(event)}>
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

          {!isMobile && !modalType && !isHideAlerts && (
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
    </>
  );
}
