import { Stack, Typography } from '@mui/material';

import AnalysisItemRow, { AnalysisItem } from './AnalysisItem';

type Props = {
  title: string;
  items: AnalysisItem[];
};

const AnalysisCard = ({ title, items }: Props) => {
  return (
    <Stack padding="10px" spacing="10px">
      <Typography variant="body2" color="white">
        {title}
      </Typography>

      {items.map((item, index) => (
        <AnalysisItemRow key={index} item={item} />
      ))}
    </Stack>
  );
};

export default AnalysisCard;
