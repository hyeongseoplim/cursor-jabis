// 기본 타입 정의
export interface Client {
  id: string;
  name: string;
  region: string;
  address: string;
  contact: string;
}

export interface Person {
  id: string;
  name: string;
  department: 'sales' | 'operations' | 'development' | 'solution';
  email: string;
  phone?: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  description?: string;
}

export interface Product {
  id: string;
  categoryId: string;
  name: string;
  price: number;
  description?: string;
}

export interface Contract {
  id: string;
  clientId: string;
  contractDate: string;
  salesPersonId: string;
  operationsPersonId: string;
  developmentPersonId: string;
  solutionPersonId: string;
  products: ContractProduct[];
  totalPrice: number;
  discount: number;
  finalPrice: number;
  note?: string;
  createdAt: string;
}

export interface ContractProduct {
  productId: string;
  quantity: number;
  price: number;
}

export interface EnvProfile {
  id: string;
  contractId: string;
  os?: string;
  framework?: string;
  db?: string;
  serverUrl?: string;
  note?: string;
}

export interface StatsSummary {
  totalContracts: number;
  totalRevenue: number;
  recentContracts: Contract[];
  revenueByRegion: { [region: string]: number };
  revenueByMonth: { [month: string]: number };
}
