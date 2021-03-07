import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from './Input';
import Checkbox from './Chekbox';
import GenreType from './GenreType';

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
        <Input
          label="Inclui o texto:"
          name="searchText"
          value={ searchText }
          onChange={ onSearchTextChange }
          test="text-input"
          testLabel="text-input-label"
        />
        <Checkbox
          checked={ bookmarkedOnly }
          value={ searchText }
          onChange={ onBookmarkedChange }
        />
        <GenreType
          label="Filtrar por gênero"
          name="select"
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
