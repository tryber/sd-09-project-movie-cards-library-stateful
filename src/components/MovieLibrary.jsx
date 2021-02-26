// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
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
    this.clickAddBtn = this.clickAddBtn.bind(this);
  }

  onSearchTextChange({ target }) {
    const { name, value, checked, type } = target;
    return type === 'checkbox' ? this.setState({ [name]: checked }) : this.setState({
      [name]: value,
    });
  }

  clickAddBtn(newMovie) {
    const { movies } = this.state;
    this.setState({ movies: [...movies, newMovie] });
  }

  filteredMovies(filteredInput, favorited, gender) {
    const { movies } = this.state;
    if (favorited) {
      return movies.filter(({ bookmarked }) => favorited === bookmarked);
    }
    if (gender) {
      return movies.filter(({ genre }) => genre === gender);
    }
    return movies.filter(({ title, subtitle, storyline }) => title.includes(filteredInput)
        || subtitle.includes(filteredInput)
        || storyline.includes(filteredInput));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onSearchTextChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSearchTextChange }
        />
        <MovieList
          movies={ this.filteredMovies(searchText, bookmarkedOnly, selectedGenre) }
        />
        <AddMovie
          onSearchTextChange={ this.onSearchTextChange }
          onClick={ this.clickAddBtn }
        />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
