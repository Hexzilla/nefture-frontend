import { Stack } from '@mui/material';

import WalletItem from './WalletItem';
import { WalletStatus } from './types';

type Props = {
  alertVisibility: boolean;
  items: WalletStatus[];
  onClick: VoidFunction;
};

export default function WalletList({ alertVisibility, items, onClick }: Props) {
  return (
    <Stack direction="column" spacing="10px" sx={{ cursor: 'pointer' }} mt={3}>
      {items.map((item, index) => (
        <WalletItem key={index} item={item} alertVisibility={alertVisibility} onClick= {onClick} />
      ))}
    </Stack>
  );
}

