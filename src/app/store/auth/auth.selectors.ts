import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./auth.state";

export const SelectAuthState = createFeatureSelector<AuthState>('auth');

export const SelectIsAuthenticated =  createSelector(
  SelectAuthState,
  (state: AuthState) => state.isAuthenticated
);

export const SelectUserData = createSelector(
  SelectAuthState,
  (state: AuthState) => state.user
);

export const SelectAuthError = createSelector(
  SelectAuthState,
  (state: AuthState) => state.error
);

export const SelectAuthLoading = createSelector(
  SelectAuthState,
  (state: AuthState) => state.loading
);
