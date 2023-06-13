// @mui
import { Box, Card, Typography, CardProps } from '@mui/material';
// utils
import { fNumber } from '../../../utils/formatNumber';

// ----------------------------------------------------------------------

interface Props extends CardProps {
  title: string;
  total: number;
  img?: React.ReactNode;
}

export default function DashboardWidgetSummary({ title, total, img, sx, ...other }: Props) {
  return (
    <Card
      sx={{
        minHeight: { xs: '96px', md: '196px' },
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        p: 3,
        borderColor: 'grey.200',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderRadius: 1,
        ...sx,
      }}
      {...other}
    >
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: { xs: 'row', md: 'column' },
          alignItems: { xs: 'center', md: 'flex-start' },
        }}
      >
        {img}
        <Box sx={{ ml: { xs: 2, md: 0 } }}>
          <Typography variant="body1" color="text.secondary" mt={2} mb={1}>
            {title}
          </Typography>
          <Typography variant="h6">{fNumber(total)}</Typography>
        </Box>
      </Box>
    </Card>
  );
}
