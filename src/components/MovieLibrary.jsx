import React from 'react';
import data from '../data';

import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  render() {
    return (
      <SearchBar data={ data } />
    );
  }
}

export default MovieLibrary;
