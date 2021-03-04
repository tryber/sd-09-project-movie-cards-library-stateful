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
          type="text"
          name="text"
          value={ searchText }
          onChange={ onSearchTextChange }
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
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
}

export default SearchBar;
