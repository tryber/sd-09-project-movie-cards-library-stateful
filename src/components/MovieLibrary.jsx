import React from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
// import PropTypes from 'prop-types';

class MovieLibrary extends React.Component {
  render() {
    // const { movies } = this.props;
    return (
      <main>
        <SearchBar />
        <AddMovie />
      </main>
    );
  }
}

export default MovieLibrary;
