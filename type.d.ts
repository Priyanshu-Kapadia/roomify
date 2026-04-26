export interface AuthState {
  isSignedIn: boolean;
  userId: string | null;
  userName: string | null;
}

export type AuthContextType = {
  isSignedIn: boolean;
  userName: string | null;
  userId: string | null;
  refreshAuth: () => Promise<void>;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
};
