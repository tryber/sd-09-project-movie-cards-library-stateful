import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
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
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onSearchTextChange(e) {
    const { value } = e.target;
    const { movies } = this.props;
    const { searchText } = this.state;

    this.setState({
      searchText: value,
      movies: movies.filter((movie) => Object.values(movie).includes(searchText)),
    });
  }

  onSelectedGenreChange(e) {
    const { value } = e.target;
    const { selectedGenre } = this.state;
    const { movies } = this.props;
    this.setState({
      selectedGenre: value,
      movies: movies.filter((movie) => movie.genre.includes(selectedGenre)),
    });
    if (selectedGenre.length === 0) {
      this.setState({
        movies,
      });
    }
  }

  onBookmarkedChange() {
    const { bookmarkedOnly } = this.state;
    const { movies } = this.props;
    this.setState((state) => ({
      bookmarkedOnly: !state.bookmarkedOnly,
    }));
    if (!bookmarkedOnly) {
      this.setState({
        movies: movies.filter((movie) => movie.bookmarked),
      });
    } else {
      this.setState({
        movies,
      });
    }
  }

  onClick(movie) {
    const { movies } = this.props;
    this.setState({
      movies: [...movies, movie],
    });
    const form = document.querySelector('form');
    form.reset();
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
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.onClick } />
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
