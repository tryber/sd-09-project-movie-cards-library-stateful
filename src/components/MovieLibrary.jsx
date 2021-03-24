import React from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

export default class MovieLibrary extends React.Component {
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
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.addMovieOnList = this.addMovieOnList.bind(this);
  }

  onSearchTextChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  onBookmarkedChange({ target }) {
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({ bookmarkedOnly: value });
  }

  onSelectedGenreChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  addMovieOnList(state) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, state],
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    // const movies = this.movieFilter;
    return (
      <div>
        {/* <h2> My awesome movie library </h2> */}
        <SearchBar
          onSearchTextChange={ this.onSearchTextChange }
          searchText={ searchText }
          onBookmarkedChange={ this.onBookmarkedChange }
          bookmarkedOnly={ bookmarkedOnly }
          onSelectedGenreChange={ this.onSelectedGenreChange }
          selectedGenre={ selectedGenre }
        />
        <MovieList
          movies={ movies }
        />
        <AddMovie
          onClick={ this.addMovieOnList }
        />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf({}),
}.isRequired;
