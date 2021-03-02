import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
      movies: props.movies,
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onAddMovieClick = this.onAddMovieClick.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  onSelectedGenreChange(evt) {
    this.handleChange(evt);
    const genre = evt.target.value === 'Todos' ? '' : evt.target.value;
    const { movies } = this.props;
    const filteredMovies = movies.filter((movie) => movie.genre.includes(genre));
    this.setState({ movies: filteredMovies });
  }

  onBookmarkedChange(evt) {
    this.handleChange(evt);
    const { movies } = this.props;
    const filteredMovies = evt.target.checked
      ? movies.filter((movie) => movie.bookmarked === true)
      : movies;
    this.setState({ movies: filteredMovies });
  }

  onSearchTextChange(evt) {
    this.handleChange(evt);
    const searchText = evt.target.value;
    const { movies } = this.props;
    const filteredMovies = movies.filter((movie) => movie.title.includes(searchText)
    || movie.subtitle.includes(searchText)
    || movie.storyline.includes(searchText));
    this.setState({ movies: filteredMovies });
  }

  onAddMovieClick(state) {
    const { movies } = this.props;
    const newMovie = {
      title: state.title,
      subtitle: state.subtitle,
      storyline: state.storyline,
      rating: parseFloat(state.rating),
      imagePath: state.imagePath,
      bookmarked: false,
      genre: state.genre,
    };
    movies.push(newMovie);
    this.setState((previousState) => ({ movies: [...previousState.movies, movies] }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
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
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.onAddMovieClick } />
      </div>
    );
  }
}
MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default MovieLibrary;
