import { Card } from '@mui/material';

import AlertItem from '@components/wallet/AlertItem';

export default function AlertSettings() {
  return (
    <>
      <Card sx={{ marginTop: '2em', borderRadius: '8px' }}>
        <AlertItem title="Real-time Alert" type={1} />
      </Card>
      <Card sx={{ marginTop: '1em', marginBottom: '1em', borderRadius: '8px' }}>
        <AlertItem title="Monthly Alert" type={1} />
      </Card>
    </>
  );
}
