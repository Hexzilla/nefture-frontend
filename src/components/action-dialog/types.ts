// @mui
import { DialogProps } from '@mui/material';

// ----------------------------------------------------------------------

export interface ActionDialogProps extends Omit<DialogProps, 'title'> {
  title: React.ReactNode;
  closeIcon: React.ReactNode;
  img: React.ReactNode;
  content?: React.ReactNode;
  action: React.ReactNode;
  open: boolean;
  onClose: VoidFunction;
}
