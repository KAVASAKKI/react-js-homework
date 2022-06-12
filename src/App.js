import { useEffect } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
import { PrivateRoute, PublicRoute, AppBar } from 'components';
import { ContactsPage, WelcomePage, RegisterPage, LoginPage } from 'routes';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser,
  );

  return (
    isFetchingCurrentUser && (
      <>
        <AppBar />

        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <PublicRoute>
                  <WelcomePage />
                </PublicRoute>
              }
              exact
            />

            <Route
              path="/contacts"
              element={
                <PrivateRoute isLoggedIn={isLoggedIn} redirectTo="/login">
                  <ContactsPage />
                </PrivateRoute>
              }
            />

            <Route
              path="/register"
              element={
                <PublicRoute
                  isLoggedIn={isLoggedIn}
                  redirectTo="/contacts"
                  restricted
                >
                  <RegisterPage />
                </PublicRoute>
              }
            />

            <Route
              path="/login"
              element={
                <PublicRoute
                  isLoggedIn={isLoggedIn}
                  redirectTo="/contacts"
                  restricted
                >
                  <LoginPage />
                </PublicRoute>
              }
            />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>

          {/* ШИЛО НА МИЛО =) */}
          {/* <Routes>
          <Route path="/" element={<WelcomePage />} exact />

          <Route
            path="/contacts"
            element={
              isLoggedIn ? <ContactsPage /> : <Navigate replace to="/login" />
            }
          />

          <Route
            path="/register"
            element={
              isLoggedIn ? (
                <Navigate replace to="/contacts" />
              ) : (
                <RegisterPage />
              )
            }
          />

          <Route
            path="/login"
            element={
              isLoggedIn ? <Navigate replace to="/contacts" /> : <LoginPage />
            }
          />

          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes> */}
        </div>
      </>
    )
  );
}
