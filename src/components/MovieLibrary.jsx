import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

export default class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  onClick = () => {};

  onSearchTextChange = (event) => {
    const { searchText, movies } = this.state;
    const { value } = event.target;
    const searchFilter = movies
      .filter(({ title, subtitle, storyline }) => title.includes(searchText)
        || subtitle.includes(searchText)
        || storyline.includes(searchText));

    this.setState({
      searchText: value,
      movies: searchFilter,
    });
  };

  onBookmarkedChange = ({ target }) => {
    const { movies } = this.state;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    let movieFilter = movies.filter((movie) => movie.bookmarked === value);
    if (!value) {
      movieFilter = movies;
    }

    this.setState({
      bookmarkedOnly: value,
      movies: movieFilter,
    });
  };

  onSelectedGenreChange = (event) => {
    const { movies } = this.state;

    const { value } = event.target;
    let genrerFilter = movies.filter((movie) => movie.genre === value);
    if (value === '') {
      genrerFilter = movies;
    }

    this.setState({
      selectedGenre: value,
      movies: genrerFilter,
    });
  };

  render() {
    const { movies } = this.state;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf.isRequired,
};
