import {
  Card,
  CardContent,
  CardHeader,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import { Stack } from '@mui/system';

export default function SettingsAccountSettings() {
  return (
    <Card>
      <CardHeader
        title="Account settings"
        subheader="Aliquam sagittis auctor in tellus auctor iaculis eget mollis."
      />
      <CardContent>
        <Stack direction="column" spacing={4}>
          <div>
            <Typography gutterBottom>Email</Typography>
            <TextField
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img alt="email" src="/assets/icons/auth/email.svg" width={20} height={16} />
                  </InputAdornment>
                ),
              }}
            />
          </div>

          <div>
            <Typography gutterBottom>Password</Typography>
            <TextField
              fullWidth
              type="password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img alt="email" src="/assets/icons/auth/password.svg" width={20} height={16} />
                  </InputAdornment>
                ),
              }}
            />
          </div>
        </Stack>
      </CardContent>
    </Card>
  );
}
