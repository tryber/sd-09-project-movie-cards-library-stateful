import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
// import MovieCard from './MovieCard';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      // movies: this.props,
    };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleBookmarkChange = this.handleBookmarkChange.bind(this);
    // this.addMovieButton = this.addMovieButton.bind(this);
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
    console.log('clicou');
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const { movies } = this.props;
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
