import React from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onClick = this.onClick.bind(this);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  onSearchTextChange(event) {
    this.setState({ searchText: event.target.value });
    const { movies } = this.props;
    if (event.target.value !== '') {
      const searchTextOption = movies
        .filter((movie) => movie.title.includes(event.target.value)
        || movie.subtitle.includes(event.target.value)
        || movie.storyline.includes(event.target.value))
        .map((element) => (element));
      this.setState({
        movies: searchTextOption,
      });
    }
  }

  onBookmarkedChange(event) {
    this.setState({ bookmarkedOnly: event.target.checked });
    const { movies } = this.props;
    if (event.target.checked !== false) {
      const bookMarkedOption = movies
        .filter((movie) => (movie.bookmarked === true))
        .map((element) => (element));
      return (this.setState({
        movies: bookMarkedOption,
      }));
    }
    return (this.setState({
      movies,
    }));
  }

  onSelectedGenreChange(event) {
    this.setState({ selectedGenre: event.target.value });
    const { movies } = this.props;
    if (event.target.value !== '') {
      const selectedGenreOption = movies
        .filter((movie) => (movie.genre === event.target.value))
        .map((element) => (element));
      this.setState({
        movies: selectedGenreOption,
      });
    }
    return (this.setState({
      movies,
    }));
  }

  onClick(param) {
    const addMovieButton = {};
    return addMovieButton.push(param);
  }

  loadMovies() {
    const { movies } = this.props;
    this.setState({
      movies,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <section>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.onSearchTextChange }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.onClick } />
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default MovieLibrary;
