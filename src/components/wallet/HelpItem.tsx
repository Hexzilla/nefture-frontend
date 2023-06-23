import { Typography, Stack, Box, Tooltip } from '@mui/material';

import SvgColor from '@components/svg-color/SvgColor';

type Props = {
  title: String;
  type: number;
};

export default function HelpItem({ title, type }: Props) {
  return (
    <Stack direction="row">
      {type == 0 && (
        <Tooltip title="This is the help">
          <Box sx={{ cursor: 'pointer' }}>
            <SvgColor src="/assets/icons/nefture/ic_help_white_round.svg" sx={{ width: '16px' }} />
          </Box>
        </Tooltip>
      )}
      <Typography variant="body2" sx={{ marginLeft: '0.5em', marginTop: '3px' }}>
        {title}
      </Typography>
      {type == 1 && (
        <Tooltip title="This is the help">
          <Box sx={{ cursor: 'pointer' }}>
            <SvgColor
              src="/assets/icons/nefture/ic_help_white_round.svg"
              sx={{ marginBottom: '-0.4em', width: '16px', marginLeft: '0.5em' }}
            />
          </Box>
        </Tooltip>
      )}
    </Stack>
  );
}
