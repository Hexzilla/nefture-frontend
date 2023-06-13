import { Stack } from '@mui/material';

import Product from '@components/products/Product';
import WinnerIcon from '@components/icons/Winner';

export type Props = {
  title: string;
  logo: string;
  url: string;
  winner: boolean;
};

export default function ProductTested({ title, logo, url, winner }: Props) {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Product title={title} logo={logo} url={url} />

      {winner && <WinnerIcon />}
    </Stack>
  );
}
