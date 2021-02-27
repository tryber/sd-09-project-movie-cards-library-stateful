import React from 'react';
import Input from './CreateElementInput';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <Input nameId="search" labelName="Inclui o texto:"
               type="text" value={ searchText } nameTest="text-input"
               func={ onSearchTextChange } />

        <label data-testid="checkbox-input-label" htmlFor="checkBox">
          Mostrar somente favoritos
          <input
            id="checkBox"
            name="checkbox"
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
          />
        </label>

        <label data-testid="select-input-label" htmlFor="genre">
          Filtrar por gênero
          <select
            id="genre"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
            data-testid="select-input"
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
  onSearchTextChange: PropTypes.string,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.string,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.string
};

export default SearchBar;
