import { Box, Stack, SxProps, Theme, Typography } from '@mui/material';
import ExternalLink from '@components/atoms/ExternalLink';

export type Props = {
  title: string;
  logo: string;
  url: string;
  sx?: SxProps<Theme>;
};

export default function Product({ title, logo, url, sx }: Props) {
  return (
    <Stack direction="row" spacing={2} sx={sx}>
      <Box component="img" src={logo} sx={{ height: '44px', width: '44px' }} />

      <Stack direction="column" justifyContent="space-between">
        <Typography>{title}</Typography>
        <ExternalLink title={url} url={url} icon />
      </Stack>
    </Stack>
  );
}
