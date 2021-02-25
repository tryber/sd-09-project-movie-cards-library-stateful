import React, { Component } from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  // eslint-disable-next-line no-useless-constructor
  // constructor(props) {
  //   super(props);
  //   this.state = {

  //   };
  // }
  render() {
    const { movies } = this.props;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
