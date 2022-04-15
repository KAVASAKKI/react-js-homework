import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  NotFoundPage,
  AppBar,
  Cast,
  ReviewList,
  MovieDetailsPage,
  HomePage,
  MoviesPage,
} from 'components';

export default function App() {
  return (
    <>
      <AppBar />

      <Routes>
        <Route exact path="/" element={<HomePage />} />

        <Route exact path="/movies" element={<MoviesPage />} />

        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<ReviewList />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
