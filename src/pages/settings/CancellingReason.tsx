import React, { useState } from 'react';
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
  RadioGroup,
  FormControl,
  FormControlLabel,
  Radio,
  InputLabel,
  TextField,
} from '@mui/material';

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function CancellingReason({ open, onClose }: Props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [reason, setReason] = useState(0);

  const handleSubmit = () => {
    console.log('handleSubmit');
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        <Typography variant="h6">Why are you cancelling?</Typography>
        <Typography variant="body1" color="inherit">
          Aliquam sagittis auctor in tellus auctor iaculis eget mollis.
        </Typography>
      </DialogTitle>

      <DialogContent sx={{ minWidth: isMobile ? 0 : 493 }}>
        <Stack spacing={2}>
          <FormControl>
            <RadioGroup defaultValue={reason} onChange={(e: any) => setReason(e.target.value)}>
              {options.map((option, index) => (
                <FormControlLabel
                  key={index}
                  value={option.id}
                  sx={{ padding: '8px 0' }}
                  control={<Radio />}
                  label={<Typography variant="body1">{option.name}</Typography>}
                />
              ))}
            </RadioGroup>
          </FormControl>

          {!!reason && (
            <FormControl variant="standard">
              <Typography mb={1}>What can we do to improve?</Typography>
              <TextField multiline rows={4} placeholder="We love to hear from our customers..." />
            </FormControl>
          )}
        </Stack>
      </DialogContent>

      <DialogActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button color="inherit" size="large" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="contained" size="large" onClick={handleSubmit}>
          Next
        </Button>
      </DialogActions>
    </Dialog>
  );
}

const options = [
  { id: 1, name: `Doesn’t meet my needs` },
  { id: 2, name: `Don’t need right now` },
  { id: 3, name: `Too expensive` },
  { id: 4, name: `Switching to an alternative` },
  { id: 5, name: `Other` },
];
