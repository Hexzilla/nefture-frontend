import { Box, Typography } from '@mui/material';

interface Props {
  title: string;
  description: string;
  img: string;
}

export default function ResearchHeader({ title, description, img }: Props) {
  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box component="img" src={img} />
        <Typography variant="body1" fontWeight="bold" mx={1}>
          {title}
        </Typography>
      </Box>
      <Typography variant="body2" color="text.secondary" my={1}>
        {description}
      </Typography>
    </Box>
  );
}
