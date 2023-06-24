import { Stack, Typography } from '@mui/material';

import RiskIcon from '@components/risks/RiskIcon';
import { RiskType } from '@components/risks/types';

export type AnalysisItem = {
  variant: RiskType;
  description: string;
};

type Props = {
  item: AnalysisItem;
};

const AnalysisItemRow = ({ item }: Props) => {
  return (
    <Stack direction="row" alignItems="center" spacing="10px">
      <RiskIcon variant={item.variant} />
      <Typography variant="subtitle2" color="white">
        {item.description}
      </Typography>
    </Stack>
  );
};

export default AnalysisItemRow;
