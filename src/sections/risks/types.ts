export interface Risk {
  id: number;
  description: string;
}

export interface Coin {
  name: string;
  img: string;
  amount: number;
}

export type RiskType = 'low' | 'medium' | 'high' | 'critical';
