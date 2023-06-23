export interface Wallet {
  title: string;
  status: number;
  statusTitle: String;
  value: number;
  progress: number;
}

export type WalletValueProps = {
  activeWallet: Wallet | null;
};

export type WalletContextProps = WalletValueProps & {
};
