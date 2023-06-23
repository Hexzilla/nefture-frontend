import { Stack, Typography } from '@mui/material';

type Props = {
  title: string;
  description?: string;
  children?: React.ReactNode;
};

export default function Description({ title, description, children }: Props) {
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Typography color="gray">{title}</Typography>
      <Stack direction="row" spacing={1} alignItems="center">
        {!!description && <Typography>{description}</Typography>}
        {children && <>{children}</>}
      </Stack>
    </Stack>
  );
}
