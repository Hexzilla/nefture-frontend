import { Risk } from "@components/risks/types";

export interface Transaction {
  status: string;
  receiving: string;
  value: string;
  state: 'critical' | 'warning' | 'secure';
  value_tx: string;
  critical_risks?: Risk[] | null;
}
