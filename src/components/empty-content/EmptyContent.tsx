import { Box, Typography, Stack, StackProps } from '@mui/material';

import SearchFileIcon from '@components/icons/SearchFile';

interface EmptyContentProps extends StackProps {
  title: string;
  img?: string;
  description?: string;
}

export default function EmptyContent({ title, description, img, sx, ...other }: EmptyContentProps) {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      spacing={2}
      sx={{
        textAlign: 'center',
        p: (theme) => theme.spacing(8, 2),
        ...sx,
      }}
      {...other}
    >
      <Box sx={{ p: 3, bgcolor: (theme) => theme.palette.grey[50], borderRadius: '8px' }}>
        <SearchFileIcon />
      </Box>

      <Typography color="inherit" variant="body2" gutterBottom>
        {title}
      </Typography>

      {description && (
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      )}
    </Stack>
  );
}
