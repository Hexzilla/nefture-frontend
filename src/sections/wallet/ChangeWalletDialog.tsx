import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField
} from '@mui/material';


type Props = {
  open: boolean;
  handleClose: VoidFunction;
  onChange: (content: string) => void;
  walletName: string;
};

export default function ChangeWalletDialog({ open, handleClose, onChange, walletName }: Props) {
  return (
    <Dialog open={open}>
      <DialogTitle>Subscribe</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We will send updates
          occasionally.
        </DialogContentText>
        <TextField
          autoFocus
          fullWidth
          type="email"
          margin="dense"
          variant="outlined"
          label="Email Address"
          onChange={(e) => onChange(e.target.value)}
          defaultValue={walletName}
          sx={{marginTop:'24px'}}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="inherit">
          Cancel
        </Button>
        <Button onClick={handleClose} variant="contained">
          Subscribe
        </Button>
      </DialogActions>
    </Dialog>
  );
}
