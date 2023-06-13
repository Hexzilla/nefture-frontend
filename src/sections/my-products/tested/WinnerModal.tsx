import React from 'react';
import { Button, Stack, Typography, Dialog, DialogContent, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import ShareIcon from '@components/icons/Share';

const Container = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: '8px',
  padding: '48px 24px',
  position: 'relative',
}));

const Heading = styled(Typography)(() => ({
  color: '#FFF',
  fontSize: '30px',
  fontWeight: 700,
  lineHeight: '38px',
  textAlign: 'center',
}));

const Description = styled(Typography)(() => ({
  color: '#FFF',
  fontSize: '16px',
  fontWeight: 450,
  lineHeight: '24px',
  textAlign: 'center',
  padding: '0 48px',
}));

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function WinnerModal({ open, onClose }: Props) {
  const handleSubmit = () => {
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent sx={{ padding: '32px' }}>
        <Container spacing={1} justifyContent="center" alignItems="center">
          <Box component="img" src="/assets/images/products/Nefture.png" mb={3} />
          <Box
            component="img"
            src="/assets/images/products/stars.png"
            position="absolute"
            sx={{ top: '-24px', opacity: 0.66, mixBlendMode: 'soft-light' }}
          />
          <Heading>You found a winning product!</Heading>
          <Description>You are in the top 5% of dropshippers in the Nefture community.</Description>
        </Container>
        <Stack direction="row" justifyContent="space-between" mt={3}>
          <Button color="inherit" size="large" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="contained" size="large" startIcon={<ShareIcon />} onClick={handleSubmit}>
            Share
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
