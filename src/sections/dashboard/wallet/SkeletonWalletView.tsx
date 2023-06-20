import { Card, CardProps, Skeleton, Stack } from '@mui/material';

export default function SkeletonWalletView({ ...other }: CardProps) {
  return (
    <Card {...other} sx={{ height: '80vh' }}>
      <Stack direction="row" justifyContent="space-between" padding="16px">
        <Skeleton variant="text" height={20} width={40} />
        <Skeleton variant="circular" width={20} height={20} sx={{ borderRadius: '50%' }} />
      </Stack>
      <Stack direction="row" justifyContent="center" mt={5}>
        <Skeleton variant="circular" width={100} height={100} sx={{ borderRadius: '1em' }} />
      </Stack>
      <Skeleton
        variant="text"
        height={120}
        sx={{ marginLeft: '1em', marginRight: '1em', marginTop: '2em' }}
      />
      <Skeleton variant="text" height={20} sx={{ marginLeft: '1em', marginRight: '1em' }} />
      <Skeleton variant="text" height={20} sx={{ marginLeft: '1em', marginRight: '1em' }} />
      <Skeleton variant="text" height={20} sx={{ marginLeft: '1em', marginRight: '1em' }} />
      <Skeleton
        variant="text"
        height={120}
        sx={{ marginLeft: '1em', marginRight: '1em', marginTop: '4em' }}
      />
    </Card>
  );
}
