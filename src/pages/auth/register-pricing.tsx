// next
import Head from 'next/head';
// @mui
import { Box, Switch, Container, Typography, Stack } from '@mui/material';
// _mock_
import { _pricingPlans } from '../../_mock/arrays';
// layouts
import SimpleLayout from '../../layouts/simple';
// sections
import RegisterPricingPlanCard from '../../sections/auth/RegisterPricingPlanCard';
import Logo from '../../components/logo';

// PricingPage.getLayout = (page: React.ReactElement) => <SimpleLayout>{page}</SimpleLayout>;

// ----------------------------------------------------------------------

export default function PricingPage() {
  return (
    <>
      <Head>
        <title> Register | Pricing</title>
      </Head>

      <Box
        sx={{
          backgroundColor: 'common.white',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            bgColor: 'common.white',
            pt: { sm: 5, md: 5, lg: 5 },
          }}
        >
          <Logo />
          <Typography variant="h5" align="center" paragraph sx={{ my: 0, mx: 1 }}>
            Nefture
          </Typography>
        </Box>

        <Container
          sx={{
            pt: 5,
            pb: 10,
            minHeight: 1,
          }}
        >
          <Typography variant="h5" align="center" paragraph>
            Select your plan
          </Typography>

          <Typography variant="body1" align="center" color="grey.700">
            Aliquam sagittis auctor in tellus auctor iaculis eget mollis.
          </Typography>

          <Box sx={{ my: 5 }}>
            <Stack direction="row" alignItems="center" justifyContent="center">
              <Typography variant="body1" sx={{ mr: 1.5 }}>
                MONTHLY
              </Typography>

              <Switch sx={{ color: 'primary' }} />
              <Stack spacing={2} direction="row" alignItems="center" justifyContent="center">
                <Box>
                  <Typography variant="body1" color="grey.700" sx={{ ml: 1.5 }}>
                    YEARLY
                  </Typography>
                </Box>

                <Box
                  sx={{
                    backgroundColor: 'primary.lighter',
                    borderRadius: '2000px',
                    m: 0,
                    px: 1,
                    py: 0.5,
                  }}
                >
                  <Typography variant="caption" fontWeight="medium" color="primary.dark">
                    save 30%
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </Box>

          <Box
            gap={3}
            display="grid"
            gridTemplateColumns={{ md: 'repeat(3, 1fr)' }}
            sx={{ alignItems: 'flex-end' }}
          >
            {_pricingPlans.map((card, index) => (
              <RegisterPricingPlanCard key={card.subscription} card={card} index={index} />
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
}
