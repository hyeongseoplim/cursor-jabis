import { Client, Person, Product, ProductCategory, Contract, EnvProfile, StatsSummary } from '@/types';

const API_BASE = '/api';

// Generic fetch wrapper
async function fetchAPI<T>(url: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE}${url}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`);
  }

  return response.json();
}

// Health Check
export const healthCheck = () => fetchAPI<{ status: string }>('/health');

// Clients API
export const clientsAPI = {
  getAll: () => fetchAPI<Client[]>('/clients'),
  getById: (id: string) => fetchAPI<Client>(`/clients/${id}`),
  create: (data: Omit<Client, 'id'>) =>
    fetchAPI<Client>('/clients', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  update: (id: string, data: Partial<Client>) =>
    fetchAPI<Client>(`/clients/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    }),
  delete: (id: string) =>
    fetchAPI<void>(`/clients/${id}`, { method: 'DELETE' }),
};

// Persons API
export const personsAPI = {
  getAll: (department?: string) => {
    const query = department ? `?department=${department}` : '';
    return fetchAPI<Person[]>(`/persons${query}`);
  },
  getById: (id: string) => fetchAPI<Person>(`/persons/${id}`),
  create: (data: Omit<Person, 'id'>) =>
    fetchAPI<Person>('/persons', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  update: (id: string, data: Partial<Person>) =>
    fetchAPI<Person>(`/persons/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    }),
  delete: (id: string) =>
    fetchAPI<void>(`/persons/${id}`, { method: 'DELETE' }),
};

// Products API
export const productsAPI = {
  getCategories: () => fetchAPI<ProductCategory[]>('/products/categories'),
  getCategoryById: (id: string) => fetchAPI<ProductCategory>(`/products/categories/${id}`),
  createCategory: (data: Omit<ProductCategory, 'id'>) =>
    fetchAPI<ProductCategory>('/products/categories', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  getAll: (categoryId?: string) => {
    const query = categoryId ? `?categoryId=${categoryId}` : '';
    return fetchAPI<Product[]>(`/products${query}`);
  },
  getById: (id: string) => fetchAPI<Product>(`/products/${id}`),
  create: (data: Omit<Product, 'id'>) =>
    fetchAPI<Product>('/products', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  update: (id: string, data: Partial<Product>) =>
    fetchAPI<Product>(`/products/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    }),
  delete: (id: string) =>
    fetchAPI<void>(`/products/${id}`, { method: 'DELETE' }),
};

// Contracts API
export const contractsAPI = {
  getAll: (filters?: {
    clientId?: string;
    salesPersonId?: string;
    from?: string;
    to?: string;
  }) => {
    const params = new URLSearchParams();
    if (filters?.clientId) params.append('clientId', filters.clientId);
    if (filters?.salesPersonId) params.append('salesPersonId', filters.salesPersonId);
    if (filters?.from) params.append('from', filters.from);
    if (filters?.to) params.append('to', filters.to);
    
    const query = params.toString() ? `?${params.toString()}` : '';
    return fetchAPI<Contract[]>(`/contracts${query}`);
  },
  getById: (id: string) => fetchAPI<Contract>(`/contracts/${id}`),
  create: (data: Omit<Contract, 'id' | 'createdAt'>) =>
    fetchAPI<Contract>('/contracts', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  update: (id: string, data: Partial<Contract>) =>
    fetchAPI<Contract>(`/contracts/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    }),
  delete: (id: string) =>
    fetchAPI<void>(`/contracts/${id}`, { method: 'DELETE' }),
  getEnvProfiles: (id: string) => fetchAPI<EnvProfile[]>(`/contracts/${id}/envs`),
  createEnvProfile: (id: string, data: Omit<EnvProfile, 'id' | 'contractId'>) =>
    fetchAPI<EnvProfile>(`/contracts/${id}/envs`, {
      method: 'POST',
      body: JSON.stringify(data),
    }),
};

// Stats API
export const statsAPI = {
  getSummary: () => fetchAPI<StatsSummary>('/stats/summary'),
};
