// ? take old state + action and return new state

import { createReducer, on } from '@ngrx/store';
import { initialAuthState } from './auth.state';
import * as AuthActions from './auth.actions';

export const AuthReducer = createReducer(
  initialAuthState,

  // ? turn on loading and clear error on login/signup request
  on(AuthActions.LoginAction, AuthActions.SignupAction, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  // ? on login/signup success save token and user data, turn off loading
  on(AuthActions.LoginSuccessAction, AuthActions.SignupSuccessAction, (state, { token }) => ({
    ...state,
    token,
    isAuthenticated: true,
    loading: false,
    error: null,
  })),

  // ? on login/signup failure save error message, turn off loading
  on(AuthActions.LoginFailureAction, AuthActions.SignupFailureAction, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  on(AuthActions.LogoutAction, (state) => ({
    token: null,
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
  })),

  on(AuthActions.GetUserSuccessAction, (state, { user }) => ({
    ...state,
    user,
    isAuthenticated: true,
  })),

  on(AuthActions.GetUserFailureAction, (state, { error }) => ({
    ...state,
    user: null,
    isAuthenticated: false,
    error,
  })),
);
