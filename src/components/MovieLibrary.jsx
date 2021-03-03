import React from 'react';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';

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
