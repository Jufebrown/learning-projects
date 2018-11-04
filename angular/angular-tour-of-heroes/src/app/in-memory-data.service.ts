import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id: 11, name: 'Wonder Woman'},
      {id: 12, name: 'Batman'},
      {id: 13, name: 'Wolverine'},
      {id: 14, name: 'Star Lord'},
      {id: 15, name: 'Green Hornet'},
      {id: 16, name: 'Ant Man'},
      {id: 17, name: 'Silver Surfer'},
      {id: 18, name: 'Doctor Strange'},
      {id: 19, name: 'Jenny'},
      {id: 20, name: 'Spiderman'}
    ];
    return {heroes};
  }
}
