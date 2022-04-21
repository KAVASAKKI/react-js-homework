import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppBar, LoadingPage } from 'components';

const HomePage = lazy(() =>
  import('routes/HomePage' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import('routes/MoviesPage' /* webpackChunkName: "movies-page" */),
);
const Cast = lazy(() => import('routes/Cast' /* webpackChunkName: "cast" */));
const ReviewList = lazy(() =>
  import('routes/Reviews' /* webpackChunkName: "reviews" */),
);
const MovieDetailsPage = lazy(() =>
  import('routes/MovieDetails' /* webpackChunkName: "movie-details" */),
);
const NotFoundPage = lazy(() =>
  import('routes/NotFoundPage' /* webpackChunkName: "not-found-page" */),
);

export default function App() {
  return (
    <>
      <AppBar />

      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route exact path="/" element={<HomePage />} />

          <Route exact path="/movies" element={<MoviesPage />} />

          <Route path="/movies/:slug" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<ReviewList />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}
