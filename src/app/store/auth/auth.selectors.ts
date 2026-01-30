import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./auth.state";

export const SelectAuthState = createFeatureSelector<AuthState>('auth');

export const SelectIsAuthenticated =  createSelector(
  SelectAuthState,
  (state: AuthState) => state.isAuthenticated
);
