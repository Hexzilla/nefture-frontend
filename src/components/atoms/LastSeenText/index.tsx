import { Stack, Typography } from '@mui/material';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';
import Iconify from '@components/iconify';
import { IconifyProps } from '@components/iconify/types';

export type Props = {
  text: string;
  icon?: IconifyProps;
  sx?: SxProps<Theme>;
  iconSize?: number;
};

export default function LastSeenText({ text, icon, sx, iconSize }: Props) {
  return (
    <Stack direction="row" alignItems={'bottom'} spacing={1}>
      {icon && iconSize && (
        <Iconify icon={icon} sx={{ width: iconSize + 'px', height: iconSize + 'px' }} />
      )}
      {icon && !iconSize && <Iconify icon={icon} sx={{ width: '14px', height: '14px' }} />}
      <Typography sx={sx}>{text}</Typography>
    </Stack>
  );
}
