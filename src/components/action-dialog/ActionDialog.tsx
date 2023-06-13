// @mui
import { Dialog, DialogTitle, DialogActions, DialogContent } from '@mui/material';
//
import { ActionDialogProps } from './types';

// ----------------------------------------------------------------------

export default function ActionDialog({
  title,
  closeIcon,
  img,
  content,
  action,
  open,
  onClose,
  ...other
}: ActionDialogProps) {
  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      open={open}
      onClose={onClose}
      {...other}
      sx={{ textAlign: 'center' }}
    >
      {closeIcon && closeIcon}
      {img && img}
      <DialogTitle sx={{ typography: { xs: 'subtitle2', md: 'h6' }, p: 0 }}>{title}</DialogTitle>

      {content && (
        <DialogContent sx={{ typography: { xs: 'body2', md: 'body1' }, color: 'text.secondary' }}>
          {content}
        </DialogContent>
      )}

      <DialogActions>{action}</DialogActions>
    </Dialog>
  );
}
