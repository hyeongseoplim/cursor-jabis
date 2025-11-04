import { Person } from '../types';

class PersonRepository {
  private persons: Person[] = [];

  findAll(): Person[] {
    return this.persons;
  }

  findById(id: string): Person | undefined {
    return this.persons.find(p => p.id === id);
  }

  findByDepartment(department: string): Person[] {
    return this.persons.filter(p => p.department === department);
  }

  create(person: Omit<Person, 'id'>): Person {
    const newPerson: Person = {
      id: `person_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      ...person
    };
    this.persons.push(newPerson);
    return newPerson;
  }

  update(id: string, person: Partial<Person>): Person | undefined {
    const index = this.persons.findIndex(p => p.id === id);
    if (index === -1) return undefined;
    
    this.persons[index] = { ...this.persons[index], ...person };
    return this.persons[index];
  }

  delete(id: string): boolean {
    const index = this.persons.findIndex(p => p.id === id);
    if (index === -1) return false;
    
    this.persons.splice(index, 1);
    return true;
  }

  seed(persons: Person[]): void {
    this.persons = persons;
  }
}

export default new PersonRepository();
