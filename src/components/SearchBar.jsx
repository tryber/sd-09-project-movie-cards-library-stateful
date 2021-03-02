// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import SelectSearch from './selectSearch';

class SearchBar extends React.Component {
  render() {
    const {
      selectedGenre,
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      onSelectedGenreChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label
          htmlFor="search"
          data-testid="text-input-label"
        >
          Inclui o texto:
          <input
            name="searchText"
            type="text"
            id="search"
            onChange={ onSearchTextChange }
            data-testid="text-input"
            value={ searchText }
          />
        </label>

        <label
          htmlFor="fav"
          data-testid="checkbox-input-label"
        >
          Mostrar somente favoritos
          <input
            name="bookmarkedOnly"
            type="checkbox"
            id="fav"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
          />
        </label>
        <SelectSearch
          onSelectedGenreChange={ onSelectedGenreChange }
          selectedGenre={ selectedGenre }
        />
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
