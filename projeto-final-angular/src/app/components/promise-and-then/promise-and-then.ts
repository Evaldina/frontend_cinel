import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user';
import { DummyService } from '../../services/dummy';

@Component({
  selector: 'app-promise-and-then',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './promise-and-then.html',
  styleUrl: './promise-and-then.css'
})
export class PromiseAndThenComponent implements OnInit {

  users: User[] = [];

  constructor(private dummyService: DummyService) {}

  ngOnInit(): void {
    this.dummyService.getUsersPromise().then(users => {
      this.users = users;
    });
  }
}