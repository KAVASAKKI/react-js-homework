import { Navigate } from 'react-router-dom';

export default function PublicRoute({
  children,
  isLoggedIn = false,
  restricted = false,
  redirectTo = '/',
}) {
  const shouldRedirect = isLoggedIn && restricted;

  if (shouldRedirect) {
    return <Navigate to={redirectTo} replace />;
  }

  return children;
}
