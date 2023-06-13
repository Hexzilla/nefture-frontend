export interface BaseProduct {
  id: number;
  name: string;
  url: string;
  logo: string;
  price?: number;
}

export interface Market {
  code: string;
  value: string;
}

export enum TestStatus {
  SCHEDULED = 0,
  TESTING = 1,
  TESTED = 2,
}

export enum ProductStatus {
  EMPTY = 0,
  PROGRESS = 1,
  READY = 2,
}

export interface ProductOverview extends BaseProduct {
  savedDate?: string;
  lastTrack?: string;
  salesToday?: number;
  salesYesterday?: number;
  status?: TestStatus | null;
}

export interface SavedProduct extends BaseProduct {
  savedDate?: string;
  lastTrack?: string;
  unitSold?: number;
  revenue?: number;
  trackedDays?: number;
}

export interface ActiveProduct extends BaseProduct {
  date?: string;
  person?: string | null;
}

export interface ScheduledProduct extends ActiveProduct {
  markets?: Market[];
  media?: string | null;
  store?: string | null;
  status?: ProductStatus | null;
}

export interface TestedProduct extends ActiveProduct {
  markets?: Market[];
  media?: string | null;
  store?: string | null;
  status?: string | null;
}
