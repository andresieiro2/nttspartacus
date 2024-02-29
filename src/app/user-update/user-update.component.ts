import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import  { User } from '../models/user.model'
import { Store ,select } from '@ngrx/store';
import {selectActualUser} from '../store/user.selectors';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss'],
  imports:[CommonModule,FormsModule]
})

export class UserUpdateComponent implements OnInit {

  user: User | null = null;
  newName: string = '';
  constructor(private store: Store<{ user: User | null  }>,private userService: UserService,private router: Router) { }

  ngOnInit() {
   this.store.pipe(select(selectActualUser)).subscribe(user => {
      this.user = user;
    });;
  }

  onUpdate(): void {
    if(this.user && this.user.id  && this.newName) {
      this.userService.updateUser(this.user.id,this.newName).subscribe(() => {
        console.log('Usuário atualizado com sucesso!')
        this.router.navigate(['/users']);
      });
    }

  }

}
