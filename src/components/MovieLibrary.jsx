import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: '',
  }
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler({ target }){
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
        [name]: value
    })
  }

  render() {
    const { movies } = this.props;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar searchText={this.state.searchText}
        onSearchTextChange={this.changeHandler}
        bookmarkedOnly={this.state.bookmarkedOnly}
        onBookmarkedChange={this.changeHandler}
        selectedGenre={this.state.selectedGenre}
        onSelectedGenreChange={this.changeHandler}
        />
        <MovieList movies={movies} />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;