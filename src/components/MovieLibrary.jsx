import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;

    this.state = {
      searchText: '',
      selectedGenre: '',
      bookmarkedOnly: false,
      movies,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.filmAdd = this.filmAdd.bind(this);
    this.filterMovie = this.filterMovie.bind(this);
  }

  handleInputChange({ target: { name, type, checked, value } }) {
    const newValue = type === 'checkbox' ? checked : value;

    this.setState({
      [name]: newValue,
    });
  }

  filmAdd(movie) {
    this.setState(({ movies }) => ({
      movies: [...movies, movie],
    }));
  }

  // Função construida com a ajuda da colega Ana Luiza Machado :)
  // fui dar uma espiadinha no código dela para encontrar onde eu
  // estava errando
  filterMovie() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let filtered = movies;

    if (searchText) {
      filtered = movies.filter((movie) => (
        movie.title.includes(searchText)
        || movie.subtitle.includes(searchText)
        || movie.storyline.includes(searchText)
      ));
    }

    if (bookmarkedOnly) {
      filtered = movies.filter((movie) => movie.bookmarked === true);
    }

    if (selectedGenre) {
      filtered = movies.filter((movie) => movie.genre === selectedGenre);
    }

    return filtered;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const movies = this.filterMovie();

    return (
      <>
        <Header />
        <SearchBar
          searchText={ searchText }
          selectedGenre={ selectedGenre }
          bookmarkedOnly={ bookmarkedOnly }
          onSearchTextChange={ this.handleInputChange }
          onBookmarkedChange={ this.handleInputChange }
          onSelectedGenreChange={ this.handleInputChange }
        />
        <AddMovie onClick={ this.filmAdd } />
        <MovieList movies={ movies } />
      </>
    );
  }
}

MovieLibrary.defaultProps = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

export default MovieLibrary;
