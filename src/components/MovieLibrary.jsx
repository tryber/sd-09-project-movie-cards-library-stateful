import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectGenre: '',
      movies: props.movies,
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.renderNewMovie = this.renderNewMovie.bind(this);
  }

  onSearchTextChange(event) {
    this.setState({
      searchText: event.target.value,
    });
  }

  onBookmarkedChange(event) {
    this.setState({
      bookmarkedOnly: event.target.checked,
    });
  }

  onSelectedGenreChange(event) {
    this.setState({
      selectGenre: event.target.value,
    });
  }

  renderNewMovie(param) {
    this.setState((prevState) => ({
      movies: [...prevState.movies, param],
    }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectGenre, movies } = this.state;
    const filteredMovies = movies
      .filter((movie) => (
        movie.title.includes(searchText)
        || movie.subtitle.includes(searchText)
        || movie.storyline.includes(searchText)));

    const bookmarkedFilter = filteredMovies
      .filter((movie) => ((bookmarkedOnly === false) ? true : movie.bookmarked));

    const filterByGenre = bookmarkedFilter
      .filter((movie) => movie.genre.includes(selectGenre));

    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectGenre={ selectGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />

        <MovieList movies={ filterByGenre } />

        <AddMovie onClick={ this.renderNewMovie } />

      </div>
    );
  }
}

MovieLibrary.propTypes = ({
  movies: PropTypes.arrayOf(PropTypes.object),
}).isRequired;

export default MovieLibrary;
