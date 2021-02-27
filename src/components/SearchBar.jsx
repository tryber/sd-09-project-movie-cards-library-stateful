// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes, { func } from 'prop-types';

import Input from './tags/Input';
import Select from './tags/Select';
import Option from './tags/Option';

class SearchBar extends Component {
  elementInput() {
    const { searchText, onSearchTextChange } = this.props;

    return {
      type: 'text',
      name: 'searchText',
      text: 'Inclui o texto:',
      value: searchText,
      callback: onSearchTextChange,
      dataLabel: 'text-input-label',
      dataInput: 'text-input',
    };
  }

  elementCheckbox() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;

    return {
      type: 'checkbox',
      name: 'bookmarkedOnly',
      text: 'Mostrar somente favoritos',
      callback: onBookmarkedChange,
      dataLabel: 'checkbox-input-label',
      dataInput: 'checkbox-input',
      checked: bookmarkedOnly,
    };
  }

  elementSelect() {
    const { selectedGenre, onSelectedGenreChange } = this.props;

    return {
      name: 'selectedGenre',
      text: 'Filtrar por gênero:',
      value: selectedGenre,
      callback: onSelectedGenreChange,
      dataLabel: 'select-input-label',
      dataInput: 'select-input',
      dataOptions: 'select-option',
      options: {
        all: 'Todos',
        action: 'Ação',
        comedy: 'Comédia',
        thriller: 'Suspense',
      },
    };
  }

  elementOptions() {
    return {
      dataOptions: 'select-option',
      options: {
        action: 'Ação',
        comedy: 'Comédia',
        thriller: 'Suspense',
      },
    };
  }

  render() {
    return (
      <fieldset className="searchmovie-fieldset">
        <legend>Pesquise</legend>
        <form data-testid="search-bar-form">
          <Input element={ this.elementInput() } />
          <Input element={ this.elementCheckbox() } />
          <Select element={ this.elementSelect() }>
            <option data-testid="select-option" value="">Todos</option>
            <Option element={ this.elementOptions() } />
          </Select>
        </form>
      </fieldset>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: func.isRequired,
};

export default SearchBar;
