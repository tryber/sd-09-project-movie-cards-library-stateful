// implement AddMovie component here
import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.handleChange = this.handleChange.bind(this);
    this.MovieList = this.MovieList.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  movieList() {
    const { movies, searchText, selectedGenre, bookmarkedOnly } = this.state;
    let movieListReturn = movies;
    if (searchText !== '') {
      movieListReturn = movies.filter((movie) => movie.title.includes(searchText)
        || movie.subtitle.includes(searchText)
        || movie.storyline.includes(searchText));
    }
    if (bookmarkedOnly) {
      movieListReturn = movies.filter((movie) => movie.bookmarked === (bookmarkedOnly));
    }
    if (selectedGenre !== '') {
      movieListReturn = movies.filter((movie) => movie.genre === (selectedGenre));
    } return movieListReturn;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const movies = this.movieList();

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange } // requisito 17
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange } // requisito 17
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange } // requisito 17
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addMoviefct } />
      </div>
    );
  }
}

MovieLibrary.propTypes = ({
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
});

export default MovieLibrary;
