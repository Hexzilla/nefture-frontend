import { Box, Typography, SxProps, Theme } from '@mui/material';

import { RiskType } from '@components/risks/types';

type Props = {
  title: string;
  variant: RiskType;
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
        marginTop: '12px',
        textAlign: 'center',
        ...sx,
      }}
    >
      <Typography>{title}</Typography>
    </Box>
  );
}
