// implement AddMovie component here
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.changeState = this.changeState.bind(this);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  changeState(event) {
    const { movies } = this.props;
    const { name, value } = event.target;
    this.setState({ [name]: value });
    this.setState((state) => {
      if (state.selectedGenre === '') return ({ movies });
      return ({ movies: movies.filter((movie) => movie.genre === state.selectedGenre) });
    });
    this.setState((state) => {
      if (state.bookmarkedOnly) {
        return ({ movies: state.movies.filter((movie) => movie.bookmarked === true) });
      }
    });
    this.setState((state) => {
      if (state.searchText !== '') {
        return ({ movies: state.movies
          .filter((movie) => (
            movie.title.includes(state.searchText)
             || movie.subtitle.includes(state.searchText)
             || movie.storyline.includes(state.searchText)
          )),
        });
      }
      return ({ movies: state.movies });
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.changeState }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.changeState }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.changeState }
        />
        <MovieList movies={ movies } />
        <AddMovie onclick={ useCallback } />
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
