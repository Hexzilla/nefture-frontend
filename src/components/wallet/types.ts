export interface Wallet {
  id: number;
  title: string;
  address: string;
  status: number;
  statusTitle: String;
  value: number;
  progress: number;
  approvals: number;
}

export type ModalType = 'New' | 'Edit' | 'View' | null;

export type WalletValueProps = {
  modalType: ModalType;
  openModal: (modalType: ModalType) => void;
  closeModal: () => void;
  activeWallet: Wallet | null;
  setActiveWallet: (value: Wallet | null) => void;
  setWalletName: (id: number, name: string) => void;
};

export type WalletContextProps = WalletValueProps & {
  wallets: Wallet[];
};
