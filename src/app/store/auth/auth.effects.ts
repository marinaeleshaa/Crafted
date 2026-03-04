import { inject, Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import * as AuthActions from './auth.actions';
import { AuthService } from './auth.service';

@Injectable()
export class AuthEffects {
  private actions$ = inject(Actions); // ? an observable of all actions dispatched to the store
  private authService = inject(AuthService); // ? an instance of AuthService to call login and signup methods

  // todo=> effect for login action
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.LoginAction), // ? pipe it to filter only LoginAction
      switchMap(
        (
          { email, password }, // ? switchMap is used to switch to another observable that is returned by loginService method of AuthService and decline the current observable, took email and password from action payload
        ) =>
          this.authService.loginService(email, password).pipe(
            // ? pipe is used to handle the response of loginService method
            map((response) =>
              AuthActions.LoginSuccessAction({ user: response.user, token: response.token }),
            ),
            catchError((error) =>
              of(
                AuthActions.LoginFailureAction({
                  error: error.error?.message || 'Unknown error',
                }),
              ),
            ), // ? of is used to create an observable
          ),
      ),
    ),
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.LoginSuccessAction),
        tap(({ token }) => {
          // ? tap is used for side effects like localStorage and don't affect the state , took token from action payload
          localStorage.setItem('token', token); // نخزن الـ token
        }),
      ),
    { dispatch: false }, // effect ده مش هيعمل dispatch لأي action
  );

  // todo=> effect for signup action

  signup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.SignupAction), // ? pipe it to filter only SignupAction
      switchMap(({ email, password, username }) =>
        this.authService.signupService(email, password, username).pipe(
          map((response) =>
            AuthActions.SignupSuccessAction({ user: response.user, token: response.token }),
          ),
          catchError((error) =>
            of(
              AuthActions.SignupFailureAction({
                error: error.error?.message || 'Unknown error',
              }),
            ),
          ),
        ),
      ),
    ),
  );

  signupSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.SignupSuccessAction),
        tap(({ token }) => {
          localStorage.setItem('token', token);
        }),
      ),
    { dispatch: false },
  );

  // todo=> effect for logout action

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.LogoutAction),
        tap(() => {
          localStorage.removeItem('token'); // ? remove the token from localStorage
        }),
      ),
    { dispatch: false },
  );
}
