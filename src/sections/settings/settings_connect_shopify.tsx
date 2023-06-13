import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

const Header = () => (
  <Stack direction="row" justifyContent="space-between">
    <div>
      <Typography variant="h6">Connect Shopify account</Typography>
      <Typography variant="body2" component="span" color="#6F6C7C">
        Aliquam sagittis auctor in tellus auctor iaculis eget mollis.
      </Typography>
    </div>
    <Box
      component="img"
      src="/assets/icons/dashboard/shopify-Nefture-connect.svg"
      sx={{ height: '82px', width: 'auto' }}
    />
  </Stack>
);

export default function SettingsConnectShopify() {
  return (
    <Card>
      <CardHeader title={<Header />} />
      <CardContent>
        <Stack direction="row" spacing={3}>
          <TextField
            fullWidth
            name="storeName"
            label=""
            placeholder="store-name"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Typography variant="subtitle2" color="black">
                    .myshopify.com
                  </Typography>
                </InputAdornment>
              ),
            }}
          />
          <Button size="large" variant="contained" color="primary" sx={{ ml: 2 }}>
            Connect
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
