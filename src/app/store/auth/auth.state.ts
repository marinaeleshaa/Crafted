export interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  user: {
    id: string;
    username: string;
  } | null;
  loading?: boolean;
  error?: string | null;
}

export const getInitialAuthState = (): AuthState => {
  const token = localStorage.getItem('token');

  return {
    token,
    isAuthenticated: !!token,
    user: null,
    loading: false,
    error: null,
  };
};

export const initialAuthState: AuthState = getInitialAuthState();
