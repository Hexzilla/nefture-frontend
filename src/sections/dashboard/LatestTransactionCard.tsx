import { Card, Stack, Typography, Box } from '@mui/material';

import EthereumIcon from '@components/icons/EthereumIcon';
import BlueCheck from '@components/icons/BlueCheck';
import ArrowCircleUp from '@components/icons/ArrowCircleUp';
import { position } from 'stylis';

type Props = {
  status: number;
  isMobile?: boolean;
  onClicked?: VoidFunction;
};
const cardSX = {
  "&:hover": {
    backgroundColor: "rgba(145,158,171,0.08)",
  },
};
export default function LatestTransactionCard({ status, isMobile, onClicked }: Props) {
  return (
    <Card onClick={onClicked} sx={ cardSX }>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
        sx={{ padding: '10px 20px', cursor:'pointer' }}
      >
        <Stack direction="row" spacing={3}>
          <Box>
            <EthereumIcon />
            <Box sx={{position:'absolute', top:0, left:0}}>
              <ArrowCircleUp/>
            </Box>
          </Box>

          <Stack direction="column" spacing={1}>
            <Typography color="grey">Received at 12:56</Typography>
            <Typography>1.05 ETH</Typography>
          </Stack>
        </Stack>

        {!isMobile && (
          <Stack direction="column" spacing={1}>
            <Typography color="grey">Status</Typography>
            <Typography>{(status<3)?'pending':'rejected'}</Typography>
          </Stack>
        )}
        <BlueCheck/>
      </Stack>
    </Card>
  );
}
