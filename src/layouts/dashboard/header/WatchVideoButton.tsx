import { Button, Box } from '@mui/material';

// ----------------------------------------------------------------------

export default function WatchVideoButton() {
  return (
    <Button
      startIcon={
        <Box
          component="img"
          src="/assets/icons/header/ic_video.svg"
          sx={{ height: '15px', width: 'auto' }}
        />
      }
      sx={{ fontSize: 'body2', fontWeight: 'medium' }}
    >
      Watch video
    </Button>
  );
}
