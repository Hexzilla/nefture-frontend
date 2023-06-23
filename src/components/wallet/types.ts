export interface Wallet {
  title: string;
  status: number;
  statusTitle: String;
  value: number;
  progress: number;
}

export type ModalType = 'New' | 'Edit' | 'View' | null;

export type WalletValueProps = {
  modalType: ModalType;
  openModal: (modalType: ModalType) => void;
  closeModal: () => void;
  activeWallet: Wallet | null;
  setActiveWallet: (value: Wallet | null) => void;
};

export type WalletContextProps = WalletValueProps & {
};
