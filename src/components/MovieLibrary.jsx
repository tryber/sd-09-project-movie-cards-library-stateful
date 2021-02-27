import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     searchText: '',
  //     bookmarkedOnly: false,
  //     selectedGenre: '',
  //     movies: '',
  //   };
  // }

  render() {
    // const { movies } = this.props;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText=""
          onSearchTextChange={ () => Component }
          bookmarkedOnly
          onBookmarkedChange={ Component }
          selectedGenre=""
          onSelectedGenreChange={ () => 'Component' }
        />
        <AddMovie
          onClick={ Component }
        />
        {/* <MovieList movies={ movies } /> */}
      </div>
    );
  }
}

// MovieLibrary.propTypes = {
//   movies: PropTypes.string.isRequired,
// };

export default MovieLibrary;
