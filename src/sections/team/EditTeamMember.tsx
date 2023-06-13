import React, { useState } from 'react';
import {
  Button,
  Stack,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Select,
  MenuItem,
} from '@mui/material';

type Props = {
  open: boolean;
  isMobile: boolean;
  onClose: () => void;
};

export default function EditTeamMember({ open, isMobile, onClose }: Props) {
  const [access, setAccess] = useState(1);

  const handleSubmit = () => {
    console.log('handleSubmit');
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        <Typography variant="h6">Edit team member</Typography>
        <Typography variant="body1" color="inherit">
          Aliquam sagittis auctor in tellus auctor iaculis eget mollis.{' '}
        </Typography>
      </DialogTitle>
      <DialogContent sx={{ minWidth: isMobile ? 0 : 563 }}>
        <Stack direction="column" spacing={3}>
          <FormControl fullWidth>
            <Typography mb={1}>Access</Typography>
            <Select
              label=""
              margin="dense"
              value={access}
              onChange={(e: any) => setAccess(e.target.value)}
            >
              <MenuItem value={1}>Admin</MenuItem>
              <MenuItem value={2}>Manager</MenuItem>
              <MenuItem value={3}>Member</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </DialogContent>
      <DialogActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button color="inherit" size="large" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="contained" size="large" onClick={handleSubmit}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
