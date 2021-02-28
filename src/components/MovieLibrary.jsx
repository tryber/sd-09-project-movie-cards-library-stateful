import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
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
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleBookmarkChange = this.handleBookmarkChange.bind(this);
    this.addMovieButton = this.addMovieButton.bind(this);
  }

  handleTextChange({ target }) {
    const { value } = target;
    this.setState({ searchText: value });
  }

  handleSelectChange({ target }) {
    const { value } = target;
    this.setState({ selectedGenre: value });
  }

  handleBookmarkChange({ target }) {
    const { checked } = target;
    this.setState({ bookmarkedOnly: checked });
  }

  addMovieButton(newMovie) {
    // const newMovie = [this.props.]
    const { movies } = this.state;
    this.setState({
      movies: [...movies, newMovie],
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <section>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleBookmarkChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleSelectChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addMovieButton } />
      </section>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
