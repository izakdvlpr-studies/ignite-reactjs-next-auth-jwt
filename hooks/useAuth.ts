import { useContext } from 'react';

import { AuthContext } from '../contexts/AuthContext';

export function useAuth() {
  const auth = useContext(AuthContext);

  return auth;
}
