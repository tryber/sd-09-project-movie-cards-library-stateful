// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormInputText from './FormInputText';
import FilterByGenreSelect from './FilterByGenreSelect';

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
      <form data-testid="search-bar-form">
        <FormInputText
          labelText="Inclui o texto:"
          name="text"
          value={ searchText }
          onChange={ onSearchTextChange }
        />

        <label data-testid="checkbox-input-label" htmlFor="rating">
          Mostrar somente favoritos
          <input
            name="rating"
            type="checkbox"
            checked={ bookmarkedOnly }
            data-testid="checkbox-input"
            onChange={ onBookmarkedChange }
            id="rating"
          />
        </label>

        <FilterByGenreSelect
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
        />
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
