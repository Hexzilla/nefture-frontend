import { Box, Card, Avatar, Stack, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';
import { IProduct } from '../../../../@types/product';
import Iconify from '@components/iconify';
import Image from '@components/image';
import FrontImageButton from '@components/atoms/FrontImageButton';

type Props = {
  product: IProduct;
};

export default function ProductFileCard({ product }: Props) {
  const { id, name, cover, price, colors, status, available, sizes, priceSale } = product;

  const { enqueueSnackbar } = useSnackbar();

  const handleDelete = () => {
    enqueueSnackbar(`File has been deleted!`, {
      variant: 'success',
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right',
      },
    });
  };

  const handleUpload = () => {
    enqueueSnackbar(`File has been uploaded!`, {
      variant: 'success',
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right',
      },
    });
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
        <Stack sx={{position:'relative'}}>
          <Image alt={name} src={cover} ratio="1/1" sx={{ borderRadius: 1.5 }} />
          <Image
              src="/assets/icons/platforms/ic_play.svg"
              sx={{position:'absolute', width:'48px', top:'calc(50% - 24px)', left:'calc(50% - 24px)', cursor:'pointer'}}/>
        </Stack>
        <Stack spacing={2} mt={2}>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Date added
            </Typography>
            <Typography variant="body2">23 Mar,2023</Typography>
          </Stack>

          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Added by
            </Typography>
            <Stack direction="row" alignItems="center">
              <Avatar sx={{ mr: 1, height: '24px', width: '24px' }}>
                <Typography variant="caption" fontWeight="medium">
                  LD
                </Typography>
              </Avatar>
              <Typography variant="body2">Luke Dalton</Typography>
            </Stack>
          </Stack>

          <Stack direction="row" justifyContent="space-between">
            <Stack direction="row" alignItems={'center'} spacing={1} sx={{cursor:"pointer"}} onClick={handleDelete}>
              <Iconify icon="eva:trash-2-outline" width={14} height={14}/>
              <Typography sx={{fontSize:"12px", marginTop:"4px!important"}}>Delete</Typography>
            </Stack>
            <FrontImageButton text="Download" sx={{fontSize:"12px", marginTop:"1px!important"}} 
            icon="eva:download-outline" onClick={handleUpload}/>
          </Stack>
        </Stack>
      </Box>
    </Card>
  );
}
