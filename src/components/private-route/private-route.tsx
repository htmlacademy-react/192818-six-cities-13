import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const hasAccess = false;

  return hasAccess ? children : <Navigate to="/login" />;
};
