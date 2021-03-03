// implement AddMovie component here
import React, { Component } from 'react';

// import MovieList from './MovieList';
import SearchBar from './SearchBar';
// import AddMovie from './AddMovie';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  resetState(estado) {
    console.log(estado);
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar />
        {/* <MovieList /> */}
        <AddMovie onClick={ this.resetState } />
      </div>
    );
  }
}

export default MovieLibrary;
