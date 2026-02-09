import { createAction, props } from '@ngrx/store';

export const LoginAction = createAction(
  '[Auth] Login',
  props<{ username: string; password: string }>(),
);

export const LogoutAction = createAction('[Auth] Logout');
