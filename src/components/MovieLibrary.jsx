// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.handleChange = this.handleChange.bind(this);
    this.filterMovie = this.filterMovie.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  handleChange(event) {
    if (event.target.type === 'checkbox') {
      return this.setState({ [event.target.name]: event.target.checked });
    }
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  filterMovie() {
    const { bookmarkedOnly, movies, selectedGenre, searchText } = this.state;
    let newMovies = movies;
    if (bookmarkedOnly === true) {
      newMovies = movies.filter((data) => (data.bookmarked === true));
    }
    if (selectedGenre) {
      newMovies = newMovies.filter((data) => (data.genre === selectedGenre));
    }
    if (searchText) {
      newMovies = newMovies.filter((data) => (data.title.toUpperCase()
        .includes(searchText.toUpperCase()))
        || (data.subtitle.toUpperCase().includes(searchText.toUpperCase()))
        || (data.storyline.toUpperCase().includes(searchText.toUpperCase())));
    }
    return newMovies;
  }

  render() {
    const movies = this.filterMovie();
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div onChange={ this.filterMovie }>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.handleChange }
          onSelectedGenreChange={ this.handleChange }
          onBookmarkedChange={ this.handleChange }
        />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf({}).isRequired,
};

export default MovieLibrary;
