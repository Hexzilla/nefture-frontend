import { Box, Card, Stack, Typography } from '@mui/material';

import Alert from '@components/icons/Alert';
import DownIcon from '@components/icons/Down';

type Props = {
  title: string;
  subtitle: string;
  color: 'critical.main';
  children?: React.ReactNode;
  onClick: VoidFunction;
};

export default function Risks({ title, subtitle, color, children, onClick }: Props) {
  return (
    <Card>
      <Stack
        direction="row"
        spacing={2}
        alignItems="start"
        justifyContent="space-between"
        sx={{ padding: '10px', cursor: 'pointer' }}
        onClick={onClick}
      >
        <Stack direction="row" spacing={1} justifyContent="space-between" alignItems="start">
          <Alert />
          <div>
            <Typography color={color}>{title}</Typography>
            <Typography variant="caption" color="grey">
              {subtitle}
            </Typography>
          </div>
        </Stack>
        <Box sx={{ transform: 'rotate(180deg)' }} display="flex" alignItems="start">
          <DownIcon />
        </Box>
      </Stack>

      {children}
    </Card>
  );
}
