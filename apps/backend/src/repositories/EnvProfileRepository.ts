import { EnvProfile } from '../types';

class EnvProfileRepository {
  private envProfiles: EnvProfile[] = [];

  findAll(): EnvProfile[] {
    return this.envProfiles;
  }

  findById(id: string): EnvProfile | undefined {
    return this.envProfiles.find(e => e.id === id);
  }

  findByContractId(contractId: string): EnvProfile[] {
    return this.envProfiles.filter(e => e.contractId === contractId);
  }

  create(envProfile: Omit<EnvProfile, 'id'>): EnvProfile {
    const newEnvProfile: EnvProfile = {
      id: `env_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      ...envProfile
    };
    this.envProfiles.push(newEnvProfile);
    return newEnvProfile;
  }

  update(id: string, envProfile: Partial<EnvProfile>): EnvProfile | undefined {
    const index = this.envProfiles.findIndex(e => e.id === id);
    if (index === -1) return undefined;
    
    this.envProfiles[index] = { ...this.envProfiles[index], ...envProfile };
    return this.envProfiles[index];
  }

  delete(id: string): boolean {
    const index = this.envProfiles.findIndex(e => e.id === id);
    if (index === -1) return false;
    
    this.envProfiles.splice(index, 1);
    return true;
  }

  seed(envProfiles: EnvProfile[]): void {
    this.envProfiles = envProfiles;
  }
}

export default new EnvProfileRepository();
