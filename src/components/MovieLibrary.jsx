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

  render() {
    const { searchText, selectedGenre, bookmarkedOnly, movies } = this.state;
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
