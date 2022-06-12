import { Navigate } from 'react-router-dom';

export default function PublicRoute({
  children,
  isLoggedIn = false,
  redirectTo = '/',
}) {
  if (isLoggedIn) {
    return children;
  }

  return <Navigate to={redirectTo} replace />;
}
