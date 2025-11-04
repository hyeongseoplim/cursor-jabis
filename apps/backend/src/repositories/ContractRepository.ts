import { Contract } from '../types';

class ContractRepository {
  private contracts: Contract[] = [];

  findAll(filters?: {
    clientId?: string;
    salesPersonId?: string;
    from?: string;
    to?: string;
  }): Contract[] {
    let result = this.contracts;

    if (filters?.clientId) {
      result = result.filter(c => c.clientId === filters.clientId);
    }

    if (filters?.salesPersonId) {
      result = result.filter(c => c.salesPersonId === filters.salesPersonId);
    }

    if (filters?.from) {
      result = result.filter(c => c.contractDate >= filters.from!);
    }

    if (filters?.to) {
      result = result.filter(c => c.contractDate <= filters.to!);
    }

    return result.sort((a, b) => 
      new Date(b.contractDate).getTime() - new Date(a.contractDate).getTime()
    );
  }

  findById(id: string): Contract | undefined {
    return this.contracts.find(c => c.id === id);
  }

  create(contract: Omit<Contract, 'id' | 'createdAt'>): Contract {
    const newContract: Contract = {
      id: `contract_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date().toISOString(),
      ...contract
    };
    this.contracts.push(newContract);
    return newContract;
  }

  update(id: string, contract: Partial<Contract>): Contract | undefined {
    const index = this.contracts.findIndex(c => c.id === id);
    if (index === -1) return undefined;
    
    this.contracts[index] = { ...this.contracts[index], ...contract };
    return this.contracts[index];
  }

  delete(id: string): boolean {
    const index = this.contracts.findIndex(c => c.id === id);
    if (index === -1) return false;
    
    this.contracts.splice(index, 1);
    return true;
  }

  seed(contracts: Contract[]): void {
    this.contracts = contracts;
  }
}

export default new ContractRepository();
