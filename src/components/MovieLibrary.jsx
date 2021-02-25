import React from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import data from '../data';
// import PropTypes from 'prop-types';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: { data },
    };
  }

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
