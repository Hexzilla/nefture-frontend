import { Skeleton, Stack } from '@mui/material';

import WalletItem from './WalletItem';
import { WalletStatus } from './types';
import { useState, useEffect } from 'react';

type Props = {
  alertVisibility: boolean;
  items: WalletStatus[];
  onClick: VoidFunction;
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
          <Skeleton variant="text" height={140} sx={{ marginBottom:'-50px!important'}} />
        ) : (
          <WalletItem key={index} item={item} alertVisibility={alertVisibility} onClick={onClick} copyToClipboard={copyToClipboard}/>
        )
      )}
    </Stack>
  );
}
