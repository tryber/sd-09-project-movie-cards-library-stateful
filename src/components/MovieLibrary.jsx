// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

const { movies } = this.props;
// const { title, subtitle, storyline, rating, imagePath } = movies;

const initialStateMovie = {
  searchText: '',
  bookmarkedOnly: false,
  selectedGenre: '',
  movies: { movies },
};

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = initialStateMovie;
  }

  onSearchTextChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  onBookmarkedOnly({ target }) {
    const { name } = target;
    this.setState({
      [name]: true,
    });
  }

  onSelectedGenreChange({ target }) {
    const { name, value } = target.selected;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          onSearchTextChange={ this.onSearchTextChange }
          searchText={ this.searchText }
          bookmarkedOnly={ this.bookmarkedOnly }
          onBookmarkedOnly={ this.onBookmarkedOnly }
          selectedGenre={ this.selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList
          movies={ this.movies }
          searchText={ this.searchText }
          bookmarkedOnly={ this.bookmarkedOnly }
          selectedGenre={ this.selectedGenre }
        />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.shape([{
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imagePath: PropTypes.string,
  }]).isRequired,
};

export default MovieLibrary;
