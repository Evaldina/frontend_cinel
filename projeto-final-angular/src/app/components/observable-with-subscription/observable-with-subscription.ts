import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user';
import { DummyService } from '../../services/dummy';

@Component({
  selector: 'app-observable-with-subscription',
  standalone: true,
 imports: [CommonModule],
  templateUrl: './observable-with-subscription.html',
  styleUrl: './observable-with-subscription.css'
})
export class ObservableWithSubscriptionComponent implements OnInit {

  users: User[] = [];

  constructor(private dummyService: DummyService) {}

  ngOnInit(): void {
    this.dummyService.getUsersObservable().subscribe(users => {
      this.users = users;
    });
  }
}