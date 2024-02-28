import { createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';

import  { User } from '../models/user.model'
import {UserState} from './user.state';



const initialState: UserState = {
  user: null,
};

export const userReducer = createReducer(
  initialState,

  on(UserActions.setUser, (state,  {user} ) => {

    console.log('action',user)

    return {
      ...state,
      user,
    }
  }
   )
);
