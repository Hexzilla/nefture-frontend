import { Risk } from './wallet/labels/types';

export interface Transaction {
  status: string;
  receiving: string;
  value: string;
  state: 'critical' | 'warning' | 'secure';
  value_tx: string;
  critical_risks?: Risk[] | null;
}
