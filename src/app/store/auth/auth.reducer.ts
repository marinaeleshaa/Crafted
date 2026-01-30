// ? take old state and return new state

import { createReducer, on } from '@ngrx/store';
import { initialAuthState } from './auth.state';
import * as AuthActions from './auth.actions';

export const AuthReducer = createReducer(
  initialAuthState,
  on(AuthActions.LoginAction, (state, { username, password }) => ({
    ...state,
    isAuthenticated: true,
  })),
  on(AuthActions.LogoutAction, (state) => ({
    ...state,
    isAuthenticated: false,
  })),
);
