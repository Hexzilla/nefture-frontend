import { useState, useEffect } from 'react';
import { Skeleton, Stack } from '@mui/material';

import { Wallet } from '@components/wallet';

import WalletItemRow from './WalletItemRow';

type Props = {
  wallets: Wallet[];
};

export default function WalletList({ wallets }: Props) {
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
      {wallets.map((wallet) => (
        <div key={wallet.id}>
          {loading ? (
            <Skeleton variant="text" height={140} sx={{ marginBottom: '-50px!important' }} />
          ) : (
            <WalletItemRow wallet={wallet} />
          )}
        </div>
      ))}
    </Stack>
  );
}
