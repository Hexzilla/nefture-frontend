import { useMemo, useState, useEffect, useContext, useCallback, createContext } from 'react';
import localStorageAvailable from '../../utils/localStorageAvailable';
import { Wallet, WalletValueProps, WalletContextProps } from './types';

const initialState: WalletContextProps = {
  activeWallet: null,
};

export const WalletContext = createContext(initialState);

export const useWalletContext = () => {
  const context = useContext(WalletContext);

  if (!context) throw new Error('useWalletContext must be use inside WalletProvider');

  return context;
};

type WalletProviderProps = {
  children: React.ReactNode;
};

export function WalletProvider({ children }: WalletProviderProps) {
  const [activeWallet, setActiveWallet] = useState<Wallet | null>(null);

  const memoizedValue = useMemo(
    () => ({
      activeWallet,
      setActiveWallet,
    }),
    [activeWallet, setActiveWallet]
  );

  return <WalletContext.Provider value={memoizedValue}>{children}</WalletContext.Provider>;
}
