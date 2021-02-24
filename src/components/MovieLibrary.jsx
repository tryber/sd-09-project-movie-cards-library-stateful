import React from 'react';
import { arrayOf, object } from 'prop-types';

class MovieLibrary extends React.Component {
  render() {
    const { movies } = this.props;
    return ();
  }
}

MovieLibrary.propTypes = {
  movies: arrayOf(object),
}

export default MovieLibrary;