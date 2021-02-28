// implement AddMovie component here
import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import Data from '../data';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    // const movies = this.props;
    this.state = {
      // searchText: '',
      // bookmarkedOnly: false,
      // selectedGenre: '',
      // movies,
    };
  }

  AddMovie() {

  }

  render() {
    const { movies } = Data;
    return (
      <div>
        <SearchBar />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.AddMovie } />
      </div>
    );
  }
}

export default MovieLibrary;
