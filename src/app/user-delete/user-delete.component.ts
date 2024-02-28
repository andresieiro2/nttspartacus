import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import  { User } from '../models/user.model'
import { Store ,select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {selectUser} from '../store/user.selectors';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.scss'],
  imports:[CommonModule,FormsModule]
})

export class UserDeleteComponent implements OnInit {

  user: User | null = null;
  userName: string = '';

  id: string = "";

  constructor(private store: Store<{ user: User | null  }>,private userService: UserService,private router: Router) { }

  ngOnInit() {
   this.store.pipe(select(selectUser)).subscribe(user => {
      this.user = user;
    });;
  }

  onDelete(): void {

    if(this.user && this.user.id) {
      this.userService.deleteUser(this.user.id).subscribe(() => {
        console.log('Usuário deletado com sucesso!');
        this.router.navigate(['/users']);
      });
    }

  }

}
