import { Stack, Typography } from '@mui/material';

import RiskDanger from '@components/icons/RiskDanger';

export type AnalysisItem = {
  variant: string;
  description: string;
}

type Props = {
  item: AnalysisItem;
}

const AnalysisItemRow = ({ item }: Props) => {
  return (
    <Stack direction="row" alignItems="center" spacing="10px">
      <RiskDanger />
      <Typography variant="subtitle2" color="white">
        {item.description}
      </Typography>
    </Stack>
  );
};

export default AnalysisItemRow;
