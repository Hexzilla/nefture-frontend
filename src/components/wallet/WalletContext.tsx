import { useMemo, useState, useContext, createContext } from 'react';
import { Wallet, WalletContextProps, ModalType } from './types';

const initialState: WalletContextProps = {
  modalType: null,
  openModal: () => {},
  closeModal: () => {},
  activeWallet: null,
  setActiveWallet: () => {},
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
  const [modalType, openModal] = useState<ModalType>(null);
  const [activeWallet, setActiveWallet] = useState<Wallet | null>(null);

  const memoizedValue = useMemo(
    () => ({
      modalType,
      openModal,
      closeModal: () => openModal(null),
      activeWallet,
      setActiveWallet,
    }),
    [modalType, activeWallet]
  );

  return <WalletContext.Provider value={memoizedValue}>{children}</WalletContext.Provider>;
}
