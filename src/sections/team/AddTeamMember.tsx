import React, { useState } from 'react';
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
  Select,
  MenuItem,
} from '@mui/material';
import CopyIcon from '@components/icons/Copy';

type Props = {
  open: boolean;
  isMobile: boolean;
  onClose: () => void;
};

export default function AddTeamMember({ open, isMobile, onClose }: Props) {
  const [access, setAccess] = useState(1);

  const handleSubmit = () => {
    console.log('handleSubmit');
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        <Typography variant="h6">Add team member</Typography>
        <Typography variant="body1" color="inherit">
          Aliquam sagittis auctor in tellus auctor iaculis eget mollis.{' '}
        </Typography>
      </DialogTitle>
      <DialogContent sx={{ minWidth: isMobile ? 0 : 563 }}>
        <Stack direction="column" spacing={3}>
          <FormControl fullWidth>
            <Typography>Enter email</Typography>
            <TextField
              id="email"
              type="email"
              placeholder="Enter team members email"
              variant="outlined"
              autoFocus
              margin="dense"
            />
          </FormControl>

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

          <FormControl fullWidth>
            <Typography mb={1}>Share via link</Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <TextField
                id="shareLink"
                type="email"
                fullWidth
                variant="outlined"
                value="https://joinNefture.com/signup"
                InputProps={{ readOnly: true }}
              />
              <Button
                color="inherit"
                variant="outlined"
                sx={{ height: '56px', padding: '21px' }}
                startIcon={<CopyIcon />}
              >
                Copy
              </Button>
            </Stack>
          </FormControl>
        </Stack>
      </DialogContent>
      <DialogActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button color="inherit" size="large" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="contained" size="large" onClick={handleSubmit}>
          Send invite
        </Button>
      </DialogActions>
    </Dialog>
  );
}
