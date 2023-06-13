// @mui
import { Card, Typography, Stack, Button } from '@mui/material';
import { useState } from 'react';
import SettingCompanyDetailModal from './settings_company_detail_modal';

// ----------------------------------------------------------------------

export default function SettingBillingAddress() {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <Card sx={{ p: 3 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={3}>
        <Typography variant="body1" color="grey.900" fontWeight="bold">
          Company details
        </Typography>
        <Button
          variant="text"
          color="primary"
          sx={{ padding: 0, minWidth: 24 }}
          onClick={() => setShowDetail(true)}
        >
          Edit
        </Button>
      </Stack>

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={3}
        sx={{ mt: 4 }}
      >
        <Typography variant="body1" color="grey.700">
          Company name
        </Typography>
        <Typography variant="body1" color="grey.900" fontWeight="medium">
          -
        </Typography>
      </Stack>

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={3}
        sx={{ mt: 3 }}
      >
        <Typography variant="body1" color="grey.700">
          Country
        </Typography>
        <Typography variant="body1" color="grey.900" fontWeight="medium">
          -
        </Typography>
      </Stack>

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={3}
        sx={{ mt: 3 }}
      >
        <Typography variant="body1" color="grey.700">
          City
        </Typography>
        <Typography variant="body1" color="grey.900" fontWeight="medium">
          -
        </Typography>
      </Stack>

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={3}
        sx={{ mt: 3 }}
      >
        <Typography variant="body1" color="grey.700">
          Address line 1
        </Typography>
        <Typography variant="body1" color="grey.900" fontWeight="medium">
          -
        </Typography>
      </Stack>

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={3}
        sx={{ mt: 3 }}
      >
        <Typography variant="body1" color="grey.700">
          Address line 2
        </Typography>
        <Typography variant="body1" color="grey.900" fontWeight="medium">
          -
        </Typography>
      </Stack>

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={3}
        sx={{ mt: 3 }}
      >
        <Typography variant="body1" color="grey.700">
          VAT
        </Typography>
        <Typography variant="body1" color="grey.900" fontWeight="medium">
          -
        </Typography>
      </Stack>
      {showDetail && (
        <SettingCompanyDetailModal open={showDetail} onClose={() => setShowDetail(false)} />
      )}
    </Card>
  );
}
