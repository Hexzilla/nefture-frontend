import React from 'react';
import {
  Button,
  Stack,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  useTheme,
  useMediaQuery,
} from '@mui/material';

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function ExtendTrialModal({ open, onClose }: Props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleSubmit = () => {
    console.log('handleSubmit');
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        <Typography variant="h6">How about we extended your trial for 7 more days?</Typography>
        <Typography variant="body1" color="inherit">
          Aliquam sagittis auctor in tellus auctor iaculis eget mollis.
        </Typography>
      </DialogTitle>
      <DialogContent sx={{ minWidth: isMobile ? 0 : 493 }}>
        <Stack
          direction="column"
          alignItems="center"
          spacing={3}
          sx={{ padding: '24px', bgcolor: '#F4F2FF', borderRadius: '8px' }}
        >
          <Typography color="primary" variant="subtitle2">
            Your trial ends on 04/2/2023
          </Typography>

          <Button variant="contained" size="large" fullWidth onClick={handleSubmit}>
            Extend trial by 7 days
          </Button>
        </Stack>
      </DialogContent>
      <DialogActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button color="inherit" size="large" onClick={onClose}>
          Cancel
        </Button>
        <Button
          variant="contained"
          size="large"
          sx={{ bgcolor: theme.palette.grey[900] }}
          onClick={handleSubmit}
        >
          Decline offer
        </Button>
      </DialogActions>
    </Dialog>
  );
}
