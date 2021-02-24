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

  handleFilter({ title, subtitle }) {
    const { searchText } = this.state;
    if (title.includes(searchText) || subtitle.includes(searchText)) {
      return true;
    }
  }

  onBookmarkedChange({ target }) {
    const { checked } = target;
    this.setState({
      bookmarkedOnly: checked,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const moviesFiltred = movies.filter(this.handleFilter);

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
