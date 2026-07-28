import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user';
import { SandboxDatabaseService } from '../../services/sandbox-database';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css'
})
export class WelcomeComponent implements OnInit {

  users: User[] = [];

  constructor(private sandboxDatabase: SandboxDatabaseService) {}

  ngOnInit(): void {
    this.users = this.sandboxDatabase.getUsers();
  }
}