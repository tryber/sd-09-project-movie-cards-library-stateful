import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [],
    }
  }
  onSearchTextChange() {
    onBookmarkedChange() {
      this.setState({
        bookmarkedOnly: true,
      });
    }
    
  }

  onBookmarkedChange() {
    this.setState({
      bookmarkedOnly: true,
    });
  }

  onSelectedGenreChange(event) {
    this.setState({
      searchText: event.target.value,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, 
      selectedGenre } = this.state;
    const {movie} = this.props;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar />
        <MovieList movies={this.props.movie} />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
