import { Card, Stack, Typography } from '@mui/material';

type Props = {
  title: String;
  value: String;
};
export default function InformationView({ title, value }: Props) {
  return (
    <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between" mt={1}>
      <Stack direction="column">
        <Typography color='gray'>{title}</Typography>
      </Stack>
      <Card>
        <Typography p={1}>{value}</Typography>
      </Card>
    </Stack>
  );
}
