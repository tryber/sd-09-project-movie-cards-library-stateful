import React from 'react';
import propTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        <MovieList movies={ movies } />
        <SearchBar />
        <AddMovie />
      </div>
    );
  }
}
MovieLibrary.propTypes = {
  movies: propTypes.arrayOf(propTypes.object),
}.isRequired;

export default MovieLibrary;
