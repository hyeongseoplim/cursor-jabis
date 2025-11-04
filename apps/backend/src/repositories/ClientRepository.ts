import { Client } from '../types';

class ClientRepository {
  private clients: Client[] = [];

  findAll(): Client[] {
    return this.clients;
  }

  findById(id: string): Client | undefined {
    return this.clients.find(c => c.id === id);
  }

  create(client: Omit<Client, 'id'>): Client {
    const newClient: Client = {
      id: `client_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      ...client
    };
    this.clients.push(newClient);
    return newClient;
  }

  update(id: string, client: Partial<Client>): Client | undefined {
    const index = this.clients.findIndex(c => c.id === id);
    if (index === -1) return undefined;
    
    this.clients[index] = { ...this.clients[index], ...client };
    return this.clients[index];
  }

  delete(id: string): boolean {
    const index = this.clients.findIndex(c => c.id === id);
    if (index === -1) return false;
    
    this.clients.splice(index, 1);
    return true;
  }

  seed(clients: Client[]): void {
    this.clients = clients;
  }
}

export default new ClientRepository();
