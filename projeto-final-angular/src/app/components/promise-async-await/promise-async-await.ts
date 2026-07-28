import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user';
import { DummyService } from '../../services/dummy';

@Component({
  selector: 'app-promise-async-await',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './promise-async-await.html',
  styleUrl: './promise-async-await.css',
})
export class PromiseAsyncAwaitComponent implements OnInit {

  users: User[] = [];

  constructor(private dummyService: DummyService) {}

  async ngOnInit(): Promise<void> {
  this.users = await this.dummyService.getUsersPromise();
  console.log(this.users);
}
}