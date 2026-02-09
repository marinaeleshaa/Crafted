import { inject, Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { tap } from "rxjs";
import * as AuthActions from "./auth.actions";

@Injectable()
export class AuthEffects {

  private actions$ = inject(Actions);

  login$ = createEffect(
    () =>
      // ? this.actions$ is observable of all actions dispatched to the store
    //? pipe it to filter only LoginAction
      this.actions$.pipe(
        ofType(AuthActions.LoginAction),
        // ? tap is used for side effects like localStorage , took username and password from action payload
        tap(({ username, password }) => {
          localStorage.setItem(
            'auth',
            JSON.stringify({
              isAuthenticated: true,
              userData: { username , password },
            })
          );
        })
      ),
      // ? dispatch: false means we don't want to dispatch the action again
    { dispatch: false }
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.LogoutAction),
        tap(() => {
          localStorage.removeItem('auth');
        })
      ),
    { dispatch: false }
  );

  // ? the constructor injects Actions observable
  // constructor(private actions$: Actions) {}
}
