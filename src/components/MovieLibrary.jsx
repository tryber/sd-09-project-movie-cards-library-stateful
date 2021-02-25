import React, { Component } from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { movies } = this.props;
    return (
      <div>
        <h2> Pesquisar filme </h2>
        <SearchBar />
        <MovieList movies={ movies } />
        {/* <AddMovie /> */}
      </div>
    );
  }
}

export default MovieLibrary;
