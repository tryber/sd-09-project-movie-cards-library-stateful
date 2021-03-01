import React from 'react';

class SearchBar extends React.Component {
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
      <div>
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label" htmlFor="text-search">
            Inclui texto:
            <input
              type="text"
              id="text-search"
              data-testid="text-input"
              value={ searchText }
              onChange={ onSearchTextChange }/>
          </label>
          <label data-testid="checkbox-input-label" htmlFor="checkbox-search">
            Mostrar somente favoritos
            <input
              type="checkbox"
              id="checkbox-search"
              data-testid="checkbox-input"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }/>
          </label>
          <label data-testid="select-input-label" htmlFor="select-search">
            Filtrar por gênero
            <select 
              data-testid="select-input"
              id="select-search"
              value={ selectedGenre }
              onChange={ onSelectedGenreChange }>
              <option data-testid="select-option" value="">Todos</option>
              <option data-testid="select-option" value="action">Ação</option>
              <option data-testid="select-option" value="comedy">Comédia</option>
              <option data-testid="select-option" value="thriller">Suspense</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
}.isRequired;

export default SearchBar;
