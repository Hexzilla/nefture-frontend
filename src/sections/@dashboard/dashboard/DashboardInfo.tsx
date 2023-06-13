// @mui
import { Box, Card, Typography, CardProps } from '@mui/material';

// ----------------------------------------------------------------------

interface Props extends CardProps {
  title: string;
  description: string;
  img: string;
}

export default function DashboardInfo({ title, description, img, sx, ...other }: Props) {
  return (
    <Card
      sx={{
        minHeight: '120px',
        display: 'flex',
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
      <Box component="img" src={img} />
      <Box sx={{ ml: 1 }}>
        <Typography variant="body1" fontWeight="bold" my={1}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </Box>
    </Card>
  );
}
