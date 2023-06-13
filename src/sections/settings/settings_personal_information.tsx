import { Card, CardContent, CardHeader, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';

export default function SettingsPersonalInformation() {
  return (
    <Card>
      <CardHeader
        title="Personal information"
        subheader="Aliquam sagittis auctor in tellus auctor iaculis eget mollis."
      />
      <CardContent>
        <Stack direction="column" spacing={4}>
          <div>
            <Typography gutterBottom>First Name</Typography>
            <TextField fullWidth />
          </div>

          <div>
            <Typography gutterBottom>Last Name</Typography>
            <TextField fullWidth />
          </div>
        </Stack>
      </CardContent>
    </Card>
  );
}
