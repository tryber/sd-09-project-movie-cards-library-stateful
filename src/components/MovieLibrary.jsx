import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };

    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    this.filterMovies = this.filterMovies.bind(this)
    this.handleBookmarkedChange = this.handleBookmarkedChange.bind(this);
    this.handleSelectedGenreChange = this.handleSelectedGenreChange.bind(this);
    this.handleAddMovie = this.handleAddMovie.bind(this);
  }

  handleSearchTextChange(event) {
    const { name, value } = event.target;
    console.log(event);
    // console.log('name:',name,'value:',value);
    this.setState({
      [name]: value,
      // movies,
    });
  }

  handleBookmarkedChange(event) {}

  handleSelectedGenreChange(event) {}

  filterMovies(value) {
    const { searchText, bookmarkedOnly, selectedGenre, movies }= this.state;
    let filteredMovies = [];
    let textFilter = [];
    let bookmarkFilter = [];

    if(searchText) {
      textFilter = movies.filter(movie => {
        const { title, subtitle, storyline } = movie;
        return title.includes(value) || subtitle.includes(value) || storyline.includes(value);
      });
    }

    if (bookmarkedOnly) {
      bookmarkFilter = textFilter.filter(movie => movie.bookmarkedOnly);
    }
    
    if (selectedGenre) {
      filteredMovies = bookmarkFilter.filter(movie => movie.genre === selectedGenre);
    }

    return filteredMovies;
  }

  handleAddMovie(movie) {
    const { movies } = this.state;
    this.setState({ movies: [...movies, movie] });
  }

  render() {
    const { searchText, movies, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange ={ this.handleSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.handleAddMovie } />
      </div>
    );
  }
}

export default MovieLibrary;
