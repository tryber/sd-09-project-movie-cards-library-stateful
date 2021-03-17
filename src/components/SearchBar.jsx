import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange,
      bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange,
    } = this.props;

    return (
      <section>
        <form data-testid="search-bar-form">
          <label htmlFor="imputSearch" data-testid="text-input-label">
            Inclui o texto
            <input
              data-testid="text-input"
              type="text"
              value={ searchText }
              onChange={ onSearchTextChange }
              name="inputSearch"
            />
          </label>
          <label htmlFor="checkedBookMark" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              type="checkbox"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
              name="checkedBookMark"
              data-testid="checkbox-input"
            />
          </label>
          <label htmlFor="selectGenre" data-testid="select-input-label">
            Filtrar por gênero
            <select
              name="selectGenre"
              onChange={ onSelectedGenreChange }
              value={ selectedGenre }
              data-testid="select-input"
            >
              <option value="" data-testid="select-option">Todos</option>
              <option value="action" data-testid="select-option">Ação</option>
              <option value="comedy" data-testid="select-option">Comédia</option>
              <option value="thriller" data-testid="select-option">Suspense</option>
            </select>
          </label>
        </form>
      </section>
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
