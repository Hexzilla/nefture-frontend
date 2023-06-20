import { SkeletonPostDetails } from '@components/skeleton';
import { Card, Skeleton } from '@mui/material';

export default function EmptyCard() {
  return <Skeleton variant="text" height={84} sx={{marginTop:'-1em'}}/>;
}
