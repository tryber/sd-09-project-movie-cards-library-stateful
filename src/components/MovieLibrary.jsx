import React from 'react';
import PropType from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleFilter({ title, subtitle, genre, bookmarked, storyline }) {
    const { searchText, selectedGenre, bookmarkedOnly } = this.state;
    const searchInputTrue = title.includes(searchText)
      || subtitle.includes(searchText)
      || storyline.includes(searchText);
    if (searchText !== '' && searchInputTrue) return true;
    if (bookmarkedOnly && bookmarked) return true;
    if (genre === selectedGenre) return true;
  }

  onBookmarkedChange({ target }) {
    const { checked } = target;
    this.setState({
      bookmarkedOnly: checked,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let moviesFiltred = movies.filter(this.handleFilter);
    if (moviesFiltred.length === 0) moviesFiltred = movies;

    return (
      <div>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.handleChange }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ moviesFiltred } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropType.arrayOf(PropType.object),
};

MovieLibrary.defaultProps = {
  movies: [],
};

export default MovieLibrary;
