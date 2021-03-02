// implement AddMovie component here
import React, { Component } from 'react';

// import MovieList from './MovieList';
import SearchBar from './SearchBar';
// import AddMovie from './AddMovie';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar searchText="string de teste" />
        {/* searchText, uma string
onSearchTextChange, uma callback
bookmarkedOnly, um boolean
onBookmarkedChange, uma callback
selectedGenre, uma string
onSelectedGenreChange, uma callback */}
        {/* <MovieList /> */}
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
