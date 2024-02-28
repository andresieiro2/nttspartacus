import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';

export const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'user/update', component: UserUpdateComponent },
  { path: 'user/delete', component: UserDeleteComponent }
];
