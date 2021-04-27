import React from 'react';
import PropTypes from 'prop-types';

import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;
    this.state = {
      bookmarkedOnly: false,
      selectedGenre: '',
      searchText: '',
      movies,
    };
    this.onClick = this.onClick.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
  }

  onClick(newMovie) {
    this.setState((prevState) => ({ movies: [...prevState.movies, newMovie] }));
  }

  onBookmarkedChange() {
    return undefined;
    // const { target: { checked } } = e;
    // const searchBook = data.filter((item) => item.bookmarked === checked);
    // this.setState({ movies: searchBook });
  }

  onSelectedGenreChange() {
    return undefined;
  }

  onSearchTextChange() {
    return undefined;
    // const { target: { value } } = e;
    // const searchTitle = data.filter((item) => value === item.title);
    // this.setState({ movies: searchTitle });
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      movies,
    } = this.state;
    return (
      <>
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
      </>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.exact({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
    bookmarked: PropTypes.string,
    genre: PropTypes.string,
  }),
}.isRequired;

export default MovieLibrary;
