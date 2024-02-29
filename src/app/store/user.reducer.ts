import { createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';

import  { User } from '../models/user.model'
import {UserState} from './user.state';



const initialState: UserState = {
  actualUser: null,
  users: [],
  error: null
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.loadUsers, state  => ({
    ...state,
    loading:true,
  })),
  on(UserActions.loadUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    loading: false
  })),
  on(UserActions.loadUsersFail, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(UserActions.setActualUser, (state,  {user} ) => ({
      ...state,
      actualUser: user,
    })
   )
);
