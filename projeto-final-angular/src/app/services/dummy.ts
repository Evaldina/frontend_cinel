import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DummyService {

  constructor() { }

  getUsers(): User[] {
    return [
      {
        id: 1,
        name: 'João Silva',
        email: 'joao@email.com',
        age: 25,
        city: 'Lisboa'
      },
      {
        id: 2,
        name: 'Maria Santos',
        email: 'maria@email.com',
        age: 30,
        city: 'Porto'
      },
      {
        id: 3,
        name: 'Pedro Costa',
        email: 'pedro@email.com',
        age: 28,
        city: 'Coimbra'
      },
      {
        id: 4,
        name: 'Ana Ferreira',
        email: 'ana@email.com',
        age: 22,
        city: 'Braga'
      },
      {
        id: 5,
        name: 'Carlos Sousa',
        email: 'carlos@email.com',
        age: 35,
        city: 'Faro'
      }
    ];
  }

  getUsersPromise(): Promise<User[]> {
  return Promise.resolve(this.getUsers());
}

getUsersObservable(): Observable<User[]> {
  return of(this.getUsers());
}
}
