import { Stack, Typography } from '@mui/material';

import AnalysisCard from './AnalysisCard';
import { AnalysisItem } from './AnalysisItem';

const ContractScore = () => {
  return (
    <Stack spacing="20px">
      <Typography variant="h6" color="risk.color.critical">
        Score: 35/100
      </Typography>

      <AnalysisCard title="Contract Analysis" items={items} />
      <AnalysisCard title="Swap Analysis" items={items} />
      <AnalysisCard title="Holder Analysis" items={items} />
      <AnalysisCard title="Liquidity Analysis" items={items} />
    </Stack>
  );
};

export default ContractScore;

const items: AnalysisItem[] = [
  { variant: 'critical', description: 'Token is sellable (not a honeypot) at this time' },
  { variant: 'low', description: 'Token is sellable (not a honeypot) at this time' },
  { variant: 'high', description: 'Token is sellable (not a honeypot) at this time' },
  { variant: 'high', description: 'Token is sellable (not a honeypot) at this time' },
];
