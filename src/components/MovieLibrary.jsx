// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  onSearchTextChange(event) {
    this.setState({ searchText: event.target.value });
  }

  onBookmarkedChange(event) {
    this.setState({ bookmarkedOnly: event.target.checked });
  }

  onSelectedGenreChange(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  addMovie(estado) {
    console.log(estado);
    this.setState(({ movies }) => ({ movies: [...movies, estado] }));
    // Esta forma que esta aqui abaixo, é uma maneira errada de
    // atualizar o state baseado no valor antigo dele.
    // const { movies } = this.state;
    // console.log(movies);
    // this.setState({
    //   movies: [...movies, estado],
    // });
    // console.log(this.state);
  }

  consoleLog() {
    const { movies } = this.state;
    console.log(movies);
  }

  filterMovies() {
    const { movies, bookmarkedOnly, selectedGenre, searchText } = this.state;
    console.log(this.state);
    let newMovies = [...movies];
    if (bookmarkedOnly) {
      newMovies = newMovies.filter((movie) => movie.bookmarked === true);
    }
    if (selectedGenre !== '') {
      newMovies = newMovies.filter((movie) => movie.genre === selectedGenre);
    }
    if (searchText !== '') {
      newMovies = newMovies.filter((movie) => {
        const movieTitle = (movie.title).toLowerCase();
        const movieSubtitle = (movie.subtitle).toLowerCase();
        const storyline = (movie.storyline).toLowerCase();
        const isMovieTitleFound = movieTitle.includes(searchText.toLowerCase());
        const isMovieSubtitleFound = movieSubtitle.includes(searchText.toLowerCase());
        const isStorylineFound = storyline.includes(searchText.toLowerCase());
        if (
          isMovieTitleFound === true
          || isMovieSubtitleFound === true
          || isStorylineFound === true
        ) {
          return true;
        }
        return false;
      });
    }
    // console.log(newMovies);
    return newMovies;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.onSearchTextChange }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ this.filterMovies() } />
        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
