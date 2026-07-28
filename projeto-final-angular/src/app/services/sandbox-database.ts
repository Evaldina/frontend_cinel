import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { DummyService } from './dummy';

@Injectable({
  providedIn: 'root'
})
export class SandboxDatabaseService {

  constructor(private dummyService: DummyService) { }

  getUsers(): User[] {
    return this.dummyService.getUsers();
  }

  getUsersPromise(): Promise<User[]> {
    return Promise.resolve(this.dummyService.getUsers());
  }
}