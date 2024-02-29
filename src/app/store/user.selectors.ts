

import { createSelector, createFeatureSelector } from '@ngrx/store';
import { UserState } from './user.state';

export const selectUserState = createFeatureSelector<UserState>('user');

export const selectActualUser = createSelector(
  selectUserState,
  (state: UserState) => state.actualUser
);

export const selectUsers = createSelector(
  selectUserState,
  (state: UserState) => state.users
);
