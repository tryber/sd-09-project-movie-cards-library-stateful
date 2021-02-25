// implement AddMovie component here
import React from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import movies from '../data';
import MovieList from './MovieList';

const MovieLibrary = () => (
  <div>
    <SearchBar />
    <AddMovie />
    <MovieList movies={ movies } />
  </div>
)

export default MovieLibrary;