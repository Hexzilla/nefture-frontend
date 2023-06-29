import { useMemo, useState, useContext, createContext } from 'react';
import { Wallet, WalletContextProps, ModalType } from './types';
import defaultWallets from './wallets.json';

const initialState: WalletContextProps = {
  wallets: [],
  modalType: null,
  openModal: () => {},
  closeModal: () => {},
  activeWallet: null,
  setActiveWallet: () => {},
  setWalletName: () => {},
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
  const [wallets, setWallets] = useState<Wallet[]>(defaultWallets);
  const [modalType, openModal] = useState<ModalType>(null);
  const [activeWallet, setActiveWallet] = useState<Wallet | null>(null);

  const setWalletName = (id: number, name: string) => {
    const updated = [...wallets];

    const index = wallets.findIndex((x) => x.id === id);
    if (index >= 0) {
      const wallet = { ...updated[index], title: name };
      updated.splice(index, 1, wallet);

      if (activeWallet && activeWallet.id === wallet.id) {
        setActiveWallet(wallet);
      }
    }

    setWallets(updated);
  };

  const memoizedValue = useMemo(
    () => ({
      wallets,
      modalType,
      openModal,
      closeModal: () => openModal(null),
      activeWallet,
      setActiveWallet,
      setWalletName,
    }),
    [wallets, modalType, activeWallet]
  );

  return <WalletContext.Provider value={memoizedValue}>{children}</WalletContext.Provider>;
}
