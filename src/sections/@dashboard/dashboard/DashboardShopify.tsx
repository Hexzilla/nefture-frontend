// @mui
import { Typography, CardProps, Stack, Box } from '@mui/material';

// ----------------------------------------------------------------------

interface Props extends CardProps {
  title?: string;
  description?: string;
  img?: React.ReactNode;
  action?: React.ReactNode;
}

export default function DashboardShopify({ title, description, action, img, ...other }: Props) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: { xs: 'flex-start', md: 'center' },
        bgcolor: 'grey.900',
        borderRadius: 1,
        p: 3,
      }}
    >
      {img && img}

      <Stack flexGrow={1} justifyContent="center" alignItems="flex-start">
        <Typography paragraph variant="subtitle1" color="white" sx={{ mb: { xs: 1, md: 0 } }}>
          {title}
        </Typography>

        <Typography
          variant="body1"
          color="grey.300"
          sx={{
            textAlign: 'left',
          }}
        >
          {description}
        </Typography>
      </Stack>

      {action && action}
    </Box>
  );
}
