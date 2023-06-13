import NextLink from 'next/link';
// @mui
import { Card, Button, Typography, Box, Stack, CardProps } from '@mui/material';
// components
import Label from '../../components/label';
// assets
import { PATH_AUTH } from '../../routes/paths';

// ----------------------------------------------------------------------

interface Props extends CardProps {
  card: {
    subscription: string;
    price: number | string;
    caption: string;
    labelAction: string;
    lists: {
      text: string;
      isAvailable: boolean;
    }[];
  };
  index: number;
}

export default function SettingsPlan({ card, index, sx, ...other }: Props) {
  const { subscription, price, caption, lists, labelAction } = card;

  return (
    <Box>
      <Card
        sx={{
          boxShadow: (theme) => theme.customShadows.z24,
          ...((index === 0 || index === 2) && {
            bgcolor: 'common.white',
            boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.06), 0px 8px 24px -4px rgba(0, 0, 0, 0.08)',
            borderRadius: '16px',
          }),
          ...(index === 1 && {
            bgcolor: 'grey.900',
            borderRadius: '16px',
            boxShadow: '0px 12px 48px -4px rgba(107, 85, 253, 0.5)',
            filter: 'drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.06))',
          }),
          ...sx,
        }}
        {...other}
      >
        {index === 1 && (
          <Stack sx={{ padding: '8px', backgroundColor: 'primary.main' }}>
            <Label
              sx={{
                color: 'common.white',
                background: 'transparent',
                fontWeight: '700',
                fontSize: '14px',
              }}
            >
              MOST POPULAR
            </Label>
          </Stack>
        )}
        <Stack
          sx={{
            p: 5,
          }}
        >
          <Stack spacing={1} direction="column" sx={{ my: 2 }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'left',
                alignItems: 'center',
              }}
            >
              {index === 0 && (
                <Box
                  component="img"
                  src="/assets/icons/auth/plan_standard.svg"
                  sx={{ width: '24px', height: '24px' }}
                />
              )}

              {index === 1 && (
                <Box
                  component="img"
                  src="/assets/icons/auth/plan_professional.svg"
                  sx={{ width: '24px', height: '24px' }}
                />
              )}

              {index === 2 && (
                <Box
                  component="img"
                  src="/assets/icons/auth/plan_premium.svg"
                  sx={{ width: '24px', height: '24px' }}
                />
              )}

              <Typography
                variant="subtitle1"
                sx={{
                  ...((index === 0 || index === 2) && { color: 'text.primary' }),
                  ...(index === 1 && { color: 'common.white' }),
                  textTransform: 'none',
                }}
              >
                {subscription}
              </Typography>
            </Box>

            <Typography
              variant="body2"
              sx={{
                ...((index === 0 || index === 2) && { color: 'text.primary' }),
                ...(index === 1 && { color: 'common.white' }),
                textTransform: 'capitalize',
              }}
            >
              {caption}
            </Typography>
          </Stack>

          <Stack spacing={1} direction="row" sx={{ my: 2 }}>
            <Typography
              variant="h2"
              sx={{
                ...((index === 0 || index === 2) && { color: 'text.primary' }),
                ...(index === 1 && { color: 'common.white' }),
              }}
            >
              {price}
            </Typography>

            <Typography
              component="span"
              sx={{
                ...((index === 0 || index === 2) && { color: 'grey.700' }),
                ...(index === 1 && { color: 'common.white' }),
                alignSelf: 'center',
              }}
            >
              /month
            </Typography>
            {/* )} */}
          </Stack>

          {index === 0 && (
            <Button
              //   component={NextLink}
              //   href={PATH_AUTH.payment}
              fullWidth
              size="large"
              variant="contained"
              sx={{
                backgroundColor: 'white',
                border: '1px solid #EEEDF2',
                borderRadius: '8px',
                color: 'grey.900',
                fontSize: '16px',
                fontWeight: '700',
                '&:hover': {
                  color: 'white',
                },
              }}
            >
              {labelAction}
            </Button>
          )}

          {index === 1 && (
            <Button
              fullWidth
              size="large"
              variant="contained"
              startIcon={
                <Box
                  component="img"
                  src="/assets/icons/setting/setting_plan_popular_Icon.svg"
                  sx={{ width: '16px', height: '16px' }}
                />
              }
              sx={{
                backgroundColor: 'grey.800',
                borderRadius: '8px',
                color: 'white',
                fontSize: '16px',
                fontWeight: '700',
              }}
            >
              {labelAction}
            </Button>
          )}

          {index === 2 && (
            <Button
              fullWidth
              size="large"
              variant="contained"
              sx={{
                backgroundColor: 'primary.main',
                borderRadius: '8px',
                color: 'white',
                fontSize: '16px',
                fontWeight: '700',
              }}
            >
              {labelAction}
            </Button>
          )}

          <Stack component="ul" spacing={2} sx={{ p: 0, my: 5 }}>
            {lists.map((item) => (
              <Stack
                key={item.text}
                component="li"
                direction="row"
                alignItems="center"
                spacing={1}
                sx={{
                  typography: 'body2',
                  color: item.isAvailable ? 'text.primary' : 'text.disabled',
                }}
              >
                {(index === 0 || index === 2) && (
                  <Box
                    component="img"
                    src="/assets/icons/auth/plan_check_icon.svg"
                    sx={{ width: '16px', height: '16px' }}
                  />
                )}
                {index === 1 && (
                  <Box
                    component="img"
                    src="/assets/icons/auth/plan_popular_check_icon.svg"
                    sx={{ width: '16px', height: '16px' }}
                  />
                )}
                <Typography
                  variant="body2"
                  sx={{
                    ...((index === 0 || index === 2) && { color: 'text.primary' }),
                    ...(index === 1 && { color: 'common.white' }),
                  }}
                >
                  {item.text}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Card>
    </Box>
  );
}
