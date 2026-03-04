export interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  user: {
    id: string;
    username: string;
    email?: string;
  } | null;
  loading?: boolean;
  error?: string | null;
}

export const getInitialAuthState = (): AuthState => {
  const token = localStorage.getItem('token');

  return {
    token,
    isAuthenticated: !!token,
    user: null, // هنجيبها من /me بعد كده
    loading: false,
    error: null,
  };
};

export const initialAuthState: AuthState = getInitialAuthState();
