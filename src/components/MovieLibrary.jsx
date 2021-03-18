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
    this.AddMovieOnList = this.AddMovieOnList.bind(this);
  }

  onSearchTextChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  onBookmarkedChange(event) {
    const { checked } = event.target;
    if (checked) {
      this.setState({
        bookmarkedOnly: true,
      });
    } else {
      this.setState({
        bookmarkedOnly: false,
      });
    }
  }

  onSelectedGenreChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  AddMovieOnList(state) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, state],
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
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
          AddMovieOnList={ this.AddMovieOnList }
        />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf({}),
}.isRequired;
