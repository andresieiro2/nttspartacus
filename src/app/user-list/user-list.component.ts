import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import  { User } from '../models/user.model'
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import * as UserActions from '../store/user.actions';

@Component({
  standalone: true,
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  imports:[CommonModule,FormsModule]
})

export class UserListComponent implements OnInit {
  users:User[] = [];
  userName: string = '';
  userNameToUpdate: string = '';
  id: string = "";

  constructor(private store: Store<{ user: User }>,private userService: UserService,private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers():void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }


  onCreate(): void {
    this.userService.createUser(this.userName).subscribe(() => {
      console.log('Usuário criado com sucesso!');
      this.getUsers();
    });
  }

  onUpdate(user:User): void {
    this.store.dispatch(UserActions.setUser({user}));
    this.router.navigate(['/user/update']);
  }

  onDelete(user:User): void {
    this.store.dispatch(UserActions.setUser({user}));
    this.router.navigate(['/user/delete']);
  }


}
