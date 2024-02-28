import { createAction, props } from '@ngrx/store';
import  { User } from '../models/user.model'


export const setUser = createAction(
  '[User] set',
  props<{ user: User }>()
);

