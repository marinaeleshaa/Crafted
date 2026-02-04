export interface AuthState {
  isAuthenticated: boolean;
  userData?: {
    username: string;
    password: string;
  };
}

export const getInitialAuthState = (): AuthState => {
  const storedAuth = localStorage.getItem('auth');
  return storedAuth
    ? JSON.parse(storedAuth)
    : {
        isAuthenticated: false,
        userData: undefined,
      };
};

export const initialAuthState: AuthState = getInitialAuthState();
