import { createAction, props } from '@ngrx/store';
import { IUser } from '../../interface/iuser';

// ? actions is just a msg that describes what happened in the app, it has a type and optional payload

// todo=> login
// ? login request
export const LoginAction = createAction(
  '[Auth] Login',
  props<{ email: string; password: string }>(),
);

// ? login success  => we will save token and user data in the state
export const LoginSuccessAction = createAction(
  '[Auth] Login Success',
  props<{ token: string; user: { id: string; username: string } }>(),
);

// ? login failure => we will save error message in the state
export const LoginFailureAction = createAction('[Auth] Login Failure', props<{ error: string }>());

// todo=> signup
// ? signup request
export const SignupAction = createAction(
  '[Auth] Signup',
  props<{ email: string; password: string; username: string }>(),
);
// ? signup success => we will save token and user data in the state
export const SignupSuccessAction = createAction(
  '[Auth] Signup Success',
  props<{ token: string; user: { id: string; username: string } }>(),
);
// ? signup failure => we will save error message in the state
export const SignupFailureAction = createAction(
  '[Auth] Signup Failure',
  props<{ error: string }>(),
);

// todo=> logout
export const LogoutAction = createAction('[Auth] Logout');

// todo=> get user
export const GetUserAction = createAction('[Auth] Get User');
export const GetUserSuccessAction = createAction(
  '[Auth] Get User Success',
  props<{ user: IUser }>(),
);
export const GetUserFailureAction = createAction(
  '[Auth] Get User Failure',
  props<{ error: string }>(),
);

// todo=> clear error
export const ClearAuthErrorAction = createAction('[Auth] Clear Error');
