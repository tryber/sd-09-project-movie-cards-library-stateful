import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.handleChange = this.handleChange.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    this.addMovieOnClick = this.addMovieOnClick.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  filterMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let filteredMovies = movies;

    if ( bookmarkedOnly ) {
      filteredMovies = movies.filter(({ bookmarked }) => bookmarked);
    }

    if ( searchText ) {
      filteredMovies = movies.filter(({ title, subtitle, storyline }) => {
       return title.includes( searchText ) || subtitle.includes( searchText ) || storyline.includes( searchText );
      } )
    }

    if ( selectedGenre ) {
      filteredMovies = movies.filter(({ genre }) => genre === selectedGenre);
    }

    return filteredMovies;
  }

  addMovieOnClick(newMovie) {
    const { movies } = this.props;
    this.setState({
      movies: [...movies, newMovie],
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const movies = this.filterMovies();
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addMovieOnClick }/>
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.number,
      imagePath: PropTypes.string,
      bookmarked: PropTypes.bool,
      genre: PropTypes.string,
    }),
  ),
}.isRequired;

export default MovieLibrary;
