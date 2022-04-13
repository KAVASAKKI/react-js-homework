import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  Container,
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

      <Container>
        <Routes>
          <Route exact path="/" element={<HomePage />} />

          <Route exact path="/movies" element={<MoviesPage />} />

          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<ReviewList />} />
          </Route>

          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </Container>
    </>
  );
}
