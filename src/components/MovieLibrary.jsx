import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  handleSearchTextChange(searchText) {
    this.setState({ searchText });
    const { bookmarkedOnly, selectedGenre } = this.state;
    this.filterMovies({ bookmarkedOnly, searchText, selectedGenre });
  }

  bookmarkedChange(bookmarkedOnly) {
    this.setState({ bookmarkedOnly });
    const { selectedGenre, searchText } = this.state;
    this.filterMovies({ bookmarkedOnly, searchText, selectedGenre });
  }

  selectedGenreChange(selectedGenre) {
    this.setState({ selectedGenre });
    const { bookmarkedOnly, searchText } = this.state;
    this.filterMovies({ bookmarkedOnly, searchText, selectedGenre });
  }

  filterMovies(newState) {
    const { movies } = this.props;
    const { bookmarkedOnly, selectedGenre, searchText } = newState;
    const bookmarkedFilter = (movie) => {
      if (bookmarkedOnly) {
        return movie.bookmarked;
      }
      return true;
    };
    const genreFilter = (movie) => {
      console.log(selectedGenre);
      if (selectedGenre) {
        return movie.genre === selectedGenre;
      }
      return true;
    };
    const textFilter = ({ title, subtitle, storyline }) => {
      const includes = (text) => text.includes(searchText);
      if (searchText) {
        return includes(title) || includes(subtitle) || includes(storyline);
      }
      return true;
    };
    const filteredMovies = movies
      .filter(bookmarkedFilter)
      .filter(genreFilter)
      .filter(textFilter);
    this.setState({ movies: filteredMovies });
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      movies,
    } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ (value) => this.handleSearchTextChange(value) }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ (value) => this.bookmarkedChange(value) }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ (value) => this.selectedGenreChange(value) }
        />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default MovieLibrary;
