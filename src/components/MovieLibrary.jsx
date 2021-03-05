// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';


class MovieLibrary extends React.Component {
  constructor (props) {
    super(props);
    
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
  }
  render() {    
    
    return (
      <div>
        <SearchBar />
        <MovieList movies={ this.props.movies } />
        <AddMovie />
      </div>
    )
  }
}

// MovieLibrary.propTypes = {
//   movies: PropTypes.array,
// }

export default MovieLibrary;
