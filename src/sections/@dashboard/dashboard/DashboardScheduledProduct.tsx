// @mui
import { Box, Card, Typography, CardProps, Avatar, IconButton } from '@mui/material';

// ----------------------------------------------------------------------

interface Props extends CardProps {
  title: string;
  emptyImg: string;
  emptyDescription: string;
  scheduledProduct?: {
    userName?: string;
    productName?: string;
    siteUrl?: string;
    userAvatar?: string;
    scheduledDate?: string;
  };
}

export default function DashboardScheduledProduct({
  title,
  emptyImg,
  emptyDescription,
  scheduledProduct,
  sx,
  ...other
}: Props) {
  return (
    <Card
      sx={{
        minHeight: '196px',
        display: 'flex',
        flexDirection: 'column',
        p: 3,
        borderColor: 'grey.200',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderRadius: 1,
        ...sx,
      }}
      {...other}
    >
      <Typography variant="body1" color="text.secondary" mb={1}>
        {title}
      </Typography>
      {scheduledProduct ? (
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            borderRadius: 1,
            borderColor: 'grey.200',
            borderWidth: '1px',
            borderStyle: 'solid',
            p: 2,
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Box
              component="img"
              src={scheduledProduct?.userAvatar}
              sx={{ height: '44px', width: 'auto' }}
            />
            <Box sx={{ ml: 1 }}>
              <Typography variant="body2" fontWeight="medium">
                {scheduledProduct?.productName}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Typography variant="body2">{scheduledProduct?.siteUrl}</Typography>
                <IconButton size="small" sx={{ ml: 6 / 8 }}>
                  <Box component="img" src="/assets/icons/dashboard/external-link.svg" />
                </IconButton>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              mt: 2,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'grey.200',
                borderRadius: 0.5,
                px: 1,
                height: '24px',
              }}
            >
              <Box
                component="img"
                src="/assets/icons/dashboard/calendar.svg"
                sx={{ height: '14px', width: 'auto', mr: 1 }}
              />
              <Typography variant="caption">{scheduledProduct?.scheduledDate}</Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                flexGrow: 1,
              }}
            >
              <Avatar sx={{ mr: 1, height: '24px', width: '24px' }}>
                <Typography variant="caption" fontWeight="medium">
                  {`${scheduledProduct?.userName?.split(' ')[0][0]}${
                    scheduledProduct?.userName?.split(' ')[1][0]
                  }`}
                </Typography>
              </Avatar>
              <Typography variant="body2">{scheduledProduct?.userName}</Typography>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
        >
          <Box component="img" src={emptyImg} sx={{ height: '20px', width: 'auto' }} />
          <Typography variant="subtitle2" color="#B0ADBC">
            Nothing scheduled today
          </Typography>
        </Box>
      )}
    </Card>
  );
}
