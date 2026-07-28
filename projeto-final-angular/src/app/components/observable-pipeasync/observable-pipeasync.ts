import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { DummyService } from '../../services/dummy';

@Component({
  selector: 'app-observable-pipeasync',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './observable-pipeasync.html',
  styleUrl: './observable-pipeasync.css'
})
export class ObservablePipeasyncComponent implements OnInit {

  users$!: Observable<User[]>;

  constructor(private dummyService: DummyService) {}

  ngOnInit(): void {
    this.users$ = this.dummyService.getUsersObservable();
  }
}