// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor() {
    super();
    const  { movies } = this.props;
    this.state = {
      searchText: '', 
      bookmarkedOnly: '',
      selectedGenre: '',
      movies,
    }
  }

  handleChange({ target:{ name, type, checked, value } }) {
    const newValue = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: newValue,
    });
  }

  addfilm(movie) {
    this.setState(() => ({
      movies: [...movies, movie],
    }));
  }

  filterMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let filtredMovies = movies;
    if (searchText) {
      filtredMovies = movies.filter((movie) => (
        movie.title.includes(searchText)
        || movie.subtitle.includes(searchText)
        || movie.storyline.includes(searchText)
      ));
    }
    if (bookmarkedOnly) {
      filtredMovies = movies.filter((movie) => movie.bookmarked === true);
    }
    if (selectedGenre) {
      filtredMovies = movies.filter((movie) => movie.genre === selectedGenre);
    }
    return filtredMovies;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          searchTextChange={ handleChange }
          selectedGenre={ handleChange }
          bookmarked={ handleChange }
        />
        <AddMovie 
          onClick ={ this.addfilm }
        />
      </>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
