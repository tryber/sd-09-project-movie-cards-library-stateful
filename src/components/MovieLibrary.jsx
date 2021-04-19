import React from 'react';
import data from '../data';

import AddMovie from './AddMovie';
import MovieCard from './MovieCard';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
  }

  render() {
    return (
      <>
        <SearchBar />
        <MovieList movies={ data } />
      </>
      /* { data.map((_item, index) => <MovieCard movie={ data[index] } key={ index } />) } */
      // <span>test</span>
    );
  }
}

export default MovieLibrary;
