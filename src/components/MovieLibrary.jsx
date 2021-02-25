import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectGenre: '',
      movies: props.movies,
    };

    this.searchTextChange = this.searchTextChange.bind(this);
    this.bookmarkedChange = this.bookmarkedChange.bind(this);
    this.newMovie = this.newMovie.bind(this);
    this.genreChange = this.genreChange.bind(this);
  }

  searchTextChange(event) {
    this.setState({
      searchText: event.target.value,
    });
  }

  bookmarkedChange(event) {
    this.setState({
      bookmarkedOnly: event.target.checked,
    });
  }

  genreChange(event) {
    this.setState({
      selectGenre: event.target.value,
    });
  }

  newMovie(data) {
    this.setState((estado) => ({ movies: [...estado.movies, data] }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectGenre, movies } = this.state;
    const filterMovies = movies
      .filter((movie) => (
        movie.title.includes(searchText)
        || movie.subtitle.includes(searchText)
        || movie.storyline.includes(searchText)
      ));
    const bookmarkedFilter = filterMovies
      .filter((movie) => ((bookmarkedOnly === false) ? true : movie.bookmarked));
    const filterGenre = bookmarkedFilter
      .filter((movie) => movie.genre.includes(selectGenre));

    return (
      <div>
        <SearchBar
          searchText={ searchText }
          searchTextChange={ this.searchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          bookmarkedChange={ this.bookmarkedChange }
          selectGenre={ selectGenre }
          genreChange={ this.genreChange }
        />
        <MovieList movies={ filterGenre } />
        <AddMovie onClick={ this.newMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = ({
  movies: PropTypes.arrayOf(PropTypes.object),
}).isRequired;

export default MovieLibrary;
