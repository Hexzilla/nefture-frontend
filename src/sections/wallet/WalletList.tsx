import { useState, useEffect } from 'react';
import { Skeleton, Stack } from '@mui/material';

import { Wallet } from '@components/wallet';

import WalletItemRow from './WalletItemRow';

type Props = {
  alertVisibility: boolean;
  wallets: Wallet[];
};

export default function WalletList({ alertVisibility, wallets }: Props) {
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
      {wallets.map((wallet, index) =>
        loading ? (
          <Skeleton variant="text" height={140} sx={{ marginBottom: '-50px!important' }} />
        ) : (
          <WalletItemRow
            key={index}
            wallet={wallet}
            alertVisibility={alertVisibility}
          />
        )
      )}
    </Stack>
  );
}
