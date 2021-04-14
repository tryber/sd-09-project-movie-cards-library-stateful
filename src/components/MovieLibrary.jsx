// MovieLibrary
// Componente que vai renderizar o searchBar e o addMovies
// Vai receber como props movies que é um array

import React from 'react';
import SearchBar from './SearchBar';
import movies from '../data';

class MovieLibrary extends React.Component {
  render() {
    return (
      <section>
        <SearchBar movies={ movies } />
      </section>
    );
  }
}

export default MovieLibrary;
