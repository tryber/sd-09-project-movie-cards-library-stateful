// MovieLibrary
// Componente que vai renderizar o searchBar e o addMovies
// Vai receber como props movies que é um array

import React from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  render() {
    return (
      <section>
        <SearchBar />
        <AddMovie />
      </section>
    );
  }
}

export default MovieLibrary;
