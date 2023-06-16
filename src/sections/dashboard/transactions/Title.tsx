import { Box, Chip, Stack, Typography } from '@mui/material';

type Props = {
  title: string;
  loading: boolean;
};

export default function Title({ title, loading }: Props) {
  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent="space-between"
      alignItems="center"
      sx={{ marginBottom: '20px' }}
    >
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography variant="h6" mr="4">
          {title}
        </Typography>
        <Chip label={1} size="small" />
      </Stack>
      {!!loading && (
        <Stack direction="row" alignItems="center">
          <Box component="img" src="/assets/icons/dashboard/awaiting.svg" width="30px" />
          <Typography color="primary">awaiting for attention</Typography>
        </Stack>
      )}
    </Stack>
  );
}
