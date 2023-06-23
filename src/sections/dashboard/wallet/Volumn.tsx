import { Card, Stack, Typography } from '@mui/material';

import PlusBlue from '@components/icons/PlusBlue';
import MinusCrucial from '@components/icons/MinusCrucial';

type Props = {
  title: string;
  icon: 'plus' | 'minus';
  quantity: string;
  volumn: string;
};

export default function Volumn({ title, icon, quantity, volumn }: Props) {
  return (
    <Stack spacing={1}>
      <Typography>{title}</Typography>
      <Card sx={{ backgroundColor: 'primary.buttonColor' }}>
        <Stack direction="row" spacing={2} alignItems="center" sx={{ padding: '10px 20px' }}>
          {icon === 'plus' ? <PlusBlue /> : <MinusCrucial />}
          <Stack>
            <Typography variant="h6">{quantity}</Typography>
            <Typography color="grey">value: {volumn}</Typography>
          </Stack>
        </Stack>
      </Card>
    </Stack>
  );
}
