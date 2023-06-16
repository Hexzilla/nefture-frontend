// @mui
import { Card, Skeleton, Stack, CardProps, Box } from '@mui/material';

// ----------------------------------------------------------------------

export default function SkeletonNetworkItem({ ...other }: CardProps) {
  return (
    <Card {...other}>
      <Stack spacing={2} sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', mt: 1.5 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Skeleton variant="text" height={35} sx={{ width: 0.7 }} />
            <Skeleton variant="text" height={20} sx={{ width: 0.9 }} />
          </Box>
          <Skeleton variant="circular" width={40} height={40} sx={{ borderRadius: 1 }} />
        </Box>
        <Skeleton variant="text" sx={{ height: '2px' }} />
        <Skeleton variant="text" height={60} />
        <Skeleton variant="text" height={60} sx={{marginTop:'0px!important'}}/>
      </Stack>
    </Card>
  );
}
