export interface Transaction {
  status: string;
  receiving: string;
  value: string;
  state: 'critical' | 'warning' | 'secure';
  value_tx: string;
  critical_risks?: Risk[] | null;
}

export interface Risk {
  id_risk: number;
  description: string;
}
