import React from 'react';
import {
  Button,
  TextField,
  Stack,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  useTheme,
  useMediaQuery,
} from '@mui/material';

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function SettingCompanyDetailModal({ open, onClose }: Props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleSubmit = () => {
    console.log('handleSubmit');
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        <Typography variant="h6">Edit company details</Typography>
        <Typography variant="body1" color="inherit">
          Aliquam sagittis auctor in tellus auctor iaculis eget mollis.
        </Typography>
      </DialogTitle>
      <DialogContent sx={{ minWidth: isMobile ? 0 : 563 }}>
        <Stack direction="column" spacing={3}>
          <FormControl fullWidth>
            <Typography>Company name</Typography>
            <TextField
              name="name"
              placeholder="Enter company name"
              variant="outlined"
              autoFocus
              margin="dense"
            />
          </FormControl>

          <Stack direction="row" justifyContent="space-between" spacing={3}>
            <FormControl fullWidth>
              <Typography>Country</Typography>
              <TextField
                name="country"
                placeholder="Enter country"
                variant="outlined"
                autoFocus
                margin="dense"
              />
            </FormControl>

            <FormControl fullWidth>
              <Typography>City</Typography>
              <TextField
                name="city"
                placeholder="Enter city"
                variant="outlined"
                autoFocus
                margin="dense"
              />
            </FormControl>
          </Stack>

          <FormControl fullWidth>
            <Typography>Address line 1</Typography>
            <TextField
              name="address1"
              placeholder="Enter address"
              variant="outlined"
              autoFocus
              margin="dense"
            />
          </FormControl>

          <FormControl fullWidth>
            <Typography>Address line 2</Typography>
            <TextField
              name="address2"
              placeholder="Enter address"
              variant="outlined"
              autoFocus
              margin="dense"
            />
          </FormControl>

          <FormControl fullWidth>
            <Typography>VAT</Typography>
            <TextField
              name="vat"
              placeholder="Enter VAT"
              variant="outlined"
              autoFocus
              margin="dense"
            />
          </FormControl>
        </Stack>
      </DialogContent>

      <DialogActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button color="inherit" size="large" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="contained" size="large" onClick={handleSubmit}>
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
}
