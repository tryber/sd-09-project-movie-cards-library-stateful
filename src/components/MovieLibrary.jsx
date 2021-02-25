// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

// const { title, subtitle, storyline, rating, imagePath } = movies;

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: { movies },
    };
  }

  handleChange({ target }) {
    const { name2, value2 } = target;
    this.setState({
      [name2]: value2,
    });
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
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          onSearchTextChange={ this.onSearchTextChange() }
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedOnly={ this.onBookmarkedOnly() }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange() }
        />
        <MovieList
          movies={ movies }
          searchText={ this.searchText }
          bookmarkedOnly={ this.bookmarkedOnly }
          selectedGenre={ this.selectedGenre }
        />
        <AddMovie
          handleChange={ this.handleChange }
          onClick={ this.onClick() }
        />
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
