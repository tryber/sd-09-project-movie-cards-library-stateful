import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
// import movies from '../data';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: props.movies,
    };
    this.addMovie = this.addMovie.bind(this);
  }

  addMovie(newMovie) {
    const { movies } = this.state;
    this.setState({
      movies: [
        ...movies, newMovie,
      ],
    });
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        <SearchBar />
        <AddMovie onClick={ this.addMovie } />
        <MovieList movies={ movies } />
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
