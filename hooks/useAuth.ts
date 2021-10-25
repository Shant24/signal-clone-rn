import firebase from 'firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '../firebase';

interface IUseAuthReturnValue {
  user?: firebase.User | null;
  loading: boolean;
  error?: firebase.auth.AuthError;
  auth: firebase.auth.Auth;
}

const useAuth = (): IUseAuthReturnValue => {
  const [user, loading, error] = useAuthState(auth);

  return { user, loading, error, auth };
};

export default useAuth;
