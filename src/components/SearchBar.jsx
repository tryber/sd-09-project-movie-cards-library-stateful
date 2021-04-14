// SearchBar
// Esse componente vai renderizar uma barra com filstros acima da listagem de cartões
// Que vão ser mostrdos no componente MovieList
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="text">
          Inclui o texto
          <input
            name="searchText"
            data-testid="text-input"
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="check">
          Mostrar somente favoritos
          <input
            name="bookmarkdOnly"
            data-testid="checkbox-input"
            type="checkbox"
            checked={ bookmarkedOnly }
            value={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
        </label>
        <label data-testid="select-input-label" htmlFor="select">
          Filtrar por gênero
          <select
            data-testid="select-input"
            onChange={ onSelectedGenreChange }
            name="selectedGenre"
            value={ selectedGenre }
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
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.string.isRequired,
};

export default SearchBar;
