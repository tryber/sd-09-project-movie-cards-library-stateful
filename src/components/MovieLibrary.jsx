import React from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;

    this.handleChangeLibrary = this.handleChangeLibrary.bind(this);
    this.onClick = this.onClick.bind(this);
    this.favoriteMovies = this.favoriteMovies.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  handleChangeLibrary({ target }) {
    const { name, value } = target;
    const valor = target.type === 'checkbox' ? target.checked : value;
    this.setState({
      [name]: valor,
    });
  }

  onClick(filmes) {
    const { movies } = this.props;
    this.setState({
      movies: [...movies, filmes],
    });
  }

  favoriteMovies() {
    const { bookmarkedOnly } = this.state;
    this.setState({
      bookmarkedOnly: !bookmarkedOnly,
    });
  }

  render() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    const bookmarkedMovies = movies.filter((movie) => movie.bookmarked === true);

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          movies={ movies }
          searchText={ searchText }
          onSearchTextChange={ this.handleChangeLibrary }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ (this.handleChangeLibrary, this.favoriteMovies) }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChangeLibrary }
        />
        <MovieList
          movies={ bookmarkedOnly ? bookmarkedMovies : movies }
          bookmarkedOnly={ bookmarkedOnly }
        />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.shape({
    movies: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieLibrary;
