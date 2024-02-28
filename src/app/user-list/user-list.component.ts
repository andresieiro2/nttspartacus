import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
interface User {
  name:string
  createdAt:Date
  id:string
}
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

  constructor(private userService: UserService) { }

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

  onUpdate(): void {
    this.userService.updateUser(this.id,this.userNameToUpdate).subscribe(() => {
      console.log('Usuário atualizado com sucesso!');
      this.getUsers();
    });
  }

  onDelete(id:string): void {
    this.userService.deleteUser(id).subscribe(() => {
      console.log('Usuário deletado com sucesso!');
      this.getUsers();
    });
  }


}
