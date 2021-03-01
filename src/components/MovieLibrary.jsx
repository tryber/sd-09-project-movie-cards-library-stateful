// implement AddMovie component here
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
      selectedGenre: '',
      movies: props.movies,
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    this.clickButton = this.clickButton.bind(this);
  }

  handleOnChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  filterMovies() {
    const { movies, bookmarkedOnly, selectedGenre, searchText } = this.state;

    if (bookmarkedOnly) {
      return movies.filter((movie) => movie.bookmarked === true);
    }
    if (searchText) {
      return movies.filter((movie) => movie.title.includes(searchText)
      || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText));
    }
    if (selectedGenre) {
      return movies.filter((movie) => movie.genre.includes(selectedGenre));
    }

    return movies;
  }

  clickButton(newMovie) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, newMovie],
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleOnChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleOnChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleOnChange }
        />
        <MovieList movies={ this.filterMovies() } />
        <AddMovie onClick={ this.clickButton } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
