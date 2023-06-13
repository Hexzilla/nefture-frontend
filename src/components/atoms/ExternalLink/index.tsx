import { Stack, Typography, Link } from '@mui/material';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';

import ExternalLinkIcon from '@components/icons/ExternalLink';

export type Props = {
  title?: string;
  url: string;
  icon?: boolean;
  sx?: SxProps<Theme>;
};

export default function ExternalLink({ url, icon, sx, title }: Props) {
  return (
      <Link href={url} sx={{color:"black", textDecoration:"none!important"}} target="_blank">
        <Stack direction="row" alignItems={'center'} spacing={1}>
            <Typography sx={sx}>{title}</Typography>
            {icon && <ExternalLinkIcon />}
        </Stack>
      </Link>
  );
}
