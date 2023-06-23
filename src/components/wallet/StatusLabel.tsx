import { Box, Typography } from '@mui/material';

type Props = {
  title: string;
  variant: 'low' | 'medium' | 'high' | 'danger';
};

export default function StatusLabel({ title, variant }: Props) {
  return (
    <Box
      sx={{
        borderRadius: '8px',
        bgcolor: backgrounds[variant],
        color: colors[variant],
        padding: '0.6em 0.5em',
        textAlign: 'center',
      }}
    >
      <Typography>{title}</Typography>
    </Box>
  );
}

const backgrounds: Record<string, string> = {
  low: '#28344A',
  medium: '#4A4028', 
  high: '#4A3828',
  danger : '#4A2828',
}

const colors: Record<string, string> = {
  low: '#2965FF',
  medium: '#FF9901',
  high: '#FF6C01',
  danger: '#FF4601',
}
