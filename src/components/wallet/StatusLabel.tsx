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
        color: `risk.color.${variant}`,
        bgcolor: `risk.background.${variant}`,
        padding: '17px',
        textAlign: 'center',
        ...sx,
      }}
    >
      <Typography>{title}</Typography>
    </Box>
  );
}
