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
      movies,
      searchText: '',
      bookMarkedOnly: false,
      selectedGenre: '',
    };

    this.AddMovie = this.AddMovie.bind(this);
    this.filteringMovies = this.filteringMovies.bind(this);
  }

  handleChange({ target }) {
    const { value, type, checked, name } = target;
    this.setState({ [name]: type === 'checkbox' ? checked : value });
  }

  AddMovie(movie) {
    const { movies } = this.state;
    console.log(movies);
    this.setState({
      movies: [...movies, movie],
    });
  }

  filteringMovies() {
    const { searchText, selectedGenre, bookMarkedOnly, movies } = this.state;
    let All = movies.filter(({ title, subtitle, storyline, genre }) => (
      (title.includes(searchText)
      || subtitle.includes(searchText)
      || storyline.includes(searchText))
      && (selectedGenre === '' || genre === selectedGenre)
    ));
    if (bookMarkedOnly) {
      All = All.filter((movie) => movie.bookmarked);
    }
    return All;
  }

  render() {
    const { bookMarkedOnly, selectedGenre, searchText } = this.state;
    const filtered = this.filteringMovies();
    return (
      <span>
        <SearchBar
          onSelectedGenreChange={ this.handleChange }
          onBookMarkedChange={ this.handleChange }
          onSearchTextChange={ this.handleChange }
          searchText={ searchText }
          bookMarkedOnly={ bookMarkedOnly }
          selectedGenre={ selectedGenre }
        />
        <MovieList movies={ filtered } />
        <AddMovie onClick={ this.AddMovie } />
      </span>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
