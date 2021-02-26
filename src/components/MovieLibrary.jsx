import React from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
// // import PropTypes from 'prop-types';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props,
    };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleBookmarkChange = this.handleBookmarkChange.bind(this);
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

  addMovieButton() {
    console.log('xablau');
  }

  render() {
    const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
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

export default MovieLibrary;
