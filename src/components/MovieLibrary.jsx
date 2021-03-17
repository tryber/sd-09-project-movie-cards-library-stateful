import React from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    // estado inicial
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  // Funções que vão atualizar os estados:
  onSearchTextChange({ target }) {
    const { value } = target;
    this.setState({
      [searchText]: value,
    });
  }

  onBookmarkedChange({ target }) {
    const { name } = target;
    const value = target.checked;
    this.setState({
      [name]: value,
    });
  }

  onSelectedGenreChange({ target }) {
    const { value } = target;
    this.setState({
      [selectedGenre]: value,
    });
  }

  onClick(state) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, state],
    });
  }

  render() {
    const { movies } = this.props;
    return (
      <section>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ onSelectedGenreChange }
        />
        <AddMovie />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.onClick } />
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieLibrary;
