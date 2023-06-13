// @mui
import { DialogProps } from '@mui/material';

// ----------------------------------------------------------------------

export interface ConfirmDialogProps extends Omit<DialogProps, 'title'> {
  title: React.ReactNode;
  content?: React.ReactNode | string;
  action: React.ReactNode;
  open: boolean;
  onClose: VoidFunction;
}
