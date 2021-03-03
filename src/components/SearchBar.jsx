import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchText from './SearchText';
import Bookmarked from './Bookmarked';

class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form" id="search-bar-form" className="form">
        <SearchText searchText={ searchText } onSearchTextChange={ onSearchTextChange } />
        <Bookmarked
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ onBookmarkedChange }
        />
        <label data-testid="select-input-label" htmlFor="select-input">
          Filtrar por gênero
          <select
            data-testid="select-input"
            id="select-input"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
          >
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
};

SearchBar.defaultProps = {
  searchText: '',
  onSearchTextChange: null,
  bookmarkedOnly: false,
  onBookmarkedChange: null,
  selectedGenre: '',
  onSelectedGenreChange: null,
};

export default SearchBar;
