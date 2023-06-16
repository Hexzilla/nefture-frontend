import PlusBlue from '@components/icons/PlusBlue';
import MinusCrucial from '@components/icons/MinusCrucial';
import { Card, Stack, Typography } from '@mui/material';
import { Risk, TransactionItem } from './types';

type Props = {
  display: string;
  data: any | TransactionItem;
  type: string;
};

export default function Volumn({ display, data, type }: Props) {
  return (
    <>
      <Typography mt={3} mb={1} sx={{display:display}}>
        {type}
      </Typography>
      <Card sx={{display:display}}>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
          sx={{ padding: '10px 20px'}}
        >
          <Stack direction="row" spacing={3} alignItems="center">
            {type.toLowerCase()==='receiving'?<PlusBlue />:<MinusCrucial />}
            <Stack direction="column" spacing={1}>
              <Typography variant="h6">{data.receiving}</Typography>
              <Typography color="grey">Value: ${data.value}</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Card>
    </>
  );
}
