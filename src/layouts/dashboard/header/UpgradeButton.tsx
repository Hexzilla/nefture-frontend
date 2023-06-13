import { Button, Box } from '@mui/material';

// ----------------------------------------------------------------------

export default function UpgradeButton() {
  return (
    <Button
      startIcon={
        <Box
          component="img"
          src="/assets/icons/header/ic_rocket.svg"
          sx={{ height: '16px', width: 'auto' }}
        />
      }
      sx={{ fontSize: 'body2', fontWeight: 'medium' }}
    >
      Upgrade
    </Button>
  );
}
