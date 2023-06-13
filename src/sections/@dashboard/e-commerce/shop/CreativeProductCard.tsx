import { paramCase } from 'change-case';
import { Box, Card, Stack, Chip, Grid, Typography } from '@mui/material';
import { PATH_DASHBOARD } from '../../../../routes/paths';
import { useDispatch } from '../../../../redux/store';
import { addToCart } from '../../../../redux/slices/product';
import { IProduct } from '../../../../@types/product';
import Image from '@components/image';
import LastSeenText from '@components/atoms/LastSeenText';
import ExternalLink from '@components/atoms/ExternalLink';
import ShopifyIcon from '@components/icons/Shopify';

type Props = {
  product: IProduct;
};

export default function CreativeProductCard({ product }: Props) {
  const { id, name, cover, price, colors, status, available, sizes, priceSale } = product;

  const dispatch = useDispatch();

  const linkTo = PATH_DASHBOARD.eCommerce.view(paramCase(name));

  const handleAddCart = async () => {
    const newProduct = {
      id,
      name,
      cover,
      available,
      price,
      colors: [colors[0]],
      size: sizes[0],
      quantity: 1,
    };
    try {
      dispatch(addToCart(newProduct));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card
      sx={{
        '&:hover .add-cart-btn': {
          opacity: 1,
        },
      }}
    >
      <Box sx={{ position: 'relative', p: 2 }}>
        <Grid item xs={12} md={6} mt={2} mb={2}>
          <Stack direction="row" spacing={2}>
            <Box component="img" src="/assets/images/company/voilondon.png" sx={{ height: '44px', width: '44px' }} />
            <Stack direction="column" justifyContent="space-between">
              <Typography>Voi London</Typography>
              <LastSeenText text="Last seen: 2 months ago" sx={{fontSize:"12px", marginTop:"1px!important"}} icon="eva:clock-outline"/>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6} mb={2}>
          <Chip
            label={
              <Stack direction="row" spacing={1} alignItems="center">
                <div>64 ads</div>
              </Stack>
            }
            sx={{ borderRadius: 1, color: "purple", marginRight: 1, minWidth: "37%" }}
          />
          <Chip
            label={
              <ExternalLink title="Ad Library" url="adlibrary.com" icon sx={{fontSize:"12px"}}/>
            }
            sx={{ borderRadius: 1, borderColor: "gray", borderWidth: 1,  
            marginRight: 1, borderStyle: "solid", backgroundColor: "white", minWidth: "37%" }}
          />
          <Chip
            label={
              <ShopifyIcon />
            }
            sx={{ borderRadius: 1, borderColor: "gray", borderWidth: 1,  marginRight: 1, 
            borderStyle: "solid", backgroundColor: "white", cursor: 'pointer' }}
          />
        </Grid>
        <Grid item xs={12} md={6} mt={2} mb={2}>
          <LastSeenText text="Found: 2 months ago" sx={{fontSize:"12px"}} icon="eva:eye-fill"/>
        </Grid>
        <Image alt={name} src={cover} ratio="1/1" sx={{ borderRadius: 1.5 }} />
      </Box>
    </Card>
  );
}
