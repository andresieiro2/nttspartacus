import { createAction, props } from '@ngrx/store';
import  { User } from '../models/user.model'


export const loadUsers = createAction(
  '[Users] loadUsers'
);

export const loadUsersSuccess = createAction(
  '[Users] loadUsers Success',
  props<{ users: User[] }>()
);

export const loadUsersFail = createAction(
  '[Users] loadUsers Fail',
  props<{ error: Error }>()
);

export const setActualUser = createAction(
  '[Users] set actual user',
  props<{ user: User }>()
);


