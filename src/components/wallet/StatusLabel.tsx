import { Box, Typography, SxProps, Theme } from '@mui/material';

type Props = {
  title: string;
  variant: 'low' | 'medium' | 'high' | 'danger';
  sx?: SxProps<Theme>;
};

export default function StatusLabel({ title, variant, sx }: Props) {
  return (
    <Box
      sx={{
        borderRadius: '8px',
        bgcolor: backgrounds[variant],
        color: colors[variant],
        padding: '18px',
        textAlign: 'center',
        ...sx,
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
  danger: '#4A2828',
};

const colors: Record<string, string> = {
  low: '#2965FF',
  medium: '#FF9901',
  high: '#FF6C01',
  danger: '#FF4601',
};
