import React from 'react';
import {
  Button,
  Stack,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  Box,
} from '@mui/material';

type Props = {
  open: boolean;
  isMobile: boolean;
  onClose: () => void;
};

export default function InviteSentDialog({ open, isMobile, onClose }: Props) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent sx={{ minWidth: isMobile ? 563 : 0, padding: '32px' }}>
        <Stack direction="column" spacing={1} alignItems="center">
          <Box
            component="img"
            src="/assets/icons/dashboard/modal-confirm.svg"
            mb={3}
            sx={{ width: 96, height: 96 }}
          />
          <Typography variant="h6">Invite sent!</Typography>
          <Typography variant="body1">
            Aliquam sagittis auctor in tellus auctor iaculis eget mollis.{' '}
          </Typography>
        </Stack>
      </DialogContent>
      <DialogActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button color="inherit" size="large" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="contained" size="large" onClick={onClose}>
          Okay
        </Button>
      </DialogActions>
    </Dialog>
  );
}
