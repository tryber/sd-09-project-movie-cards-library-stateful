// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: '',
      selectedGenre: '',
      movies: props.movies,
    };
    this.handleChange = this.handleChange.bind(this);
    // this.addfilm = this.addfilm.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
  }

  handleChange({ target: { name, type, checked, value } }) {
    const newValue = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: newValue,
    });
  }

  // addfilm(movie) {
  // this.setState(() => ({
  //    movies: [...movies, movie],
  //  }));
  //  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const arrayFilteredMovies = movies;
    arrayFilteredMovies.filter((movie) => (
      movie.title.includes(searchText)
      || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText)
    ));
    const bookedFilteredMovies = arrayFilteredMovies
      .filter((movie) => ((bookmarkedOnly === false) ? true : movie.bookmarkedOnly));
    const genreFilteredMovies = bookedFilteredMovies
      .filter((movie) => movie.genre.includes(selectedGenre));
    console.log(arrayFilteredMovies);
    return (
      <>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          searchTextChange={ this.handleChange }
          selectedGenreChange={ this.handleChange }
          bookmarked={ this.handleChange }
        />
        <AddMovie
          onClick={ this.addfilm }
        />
      </>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
