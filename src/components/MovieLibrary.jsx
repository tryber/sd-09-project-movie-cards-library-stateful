import React from 'react';
import propTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  render() {
    return (
      <div>
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
