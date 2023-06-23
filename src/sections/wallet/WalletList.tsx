import { useState, useEffect } from 'react';
import { Skeleton, Stack } from '@mui/material';

import { Wallet } from '@components/wallet';

import WalletItem from './WalletItem';

type Props = {
  alertVisibility: boolean;
  items: Wallet[];
  onClick: (item: Wallet) => void;
  copyToClipboard: (content: string) => void;
};

export default function WalletList({ alertVisibility, items, onClick, copyToClipboard }: Props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    })();
  }, []);

  return (
    <Stack direction="column" spacing="10px" sx={{ cursor: 'pointer' }} mt={3}>
      {items.map((item, index) =>
        loading ? (
          <Skeleton variant="text" height={140} sx={{ marginBottom: '-50px!important' }} />
        ) : (
          <WalletItem
            key={index}
            item={item}
            alertVisibility={alertVisibility}
            onClick={() => onClick(item)}
            copyToClipboard={copyToClipboard}
          />
        )
      )}
    </Stack>
  );
}
