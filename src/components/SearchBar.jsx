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
      <section>
        <form data-testid="search-bar-form">
          <label htmlFor="firstInput" data-testid="text-input-label">
            <p>Inclui o texto:</p>
            <input
              id="firstInput"
              type="text"
              data-testid="text-input"
              value={ searchText }
              onChange={ onSearchTextChange }
            />
          </label>
          <label htmlFor="secondInput" data-testid="checkbox-input-label">
            <p>Mostrar somente favoritos</p>
            <input
              id="secondInput"
              type="checkbox"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
              data-testid="checkbox-input"
            />
          </label>
          <label htmlFor="thirdInput" data-testid="select-input-label">
            <p>Filtrar por gênero</p>
            <select
              id="thirdInput"
              value={ selectedGenre }
              onChange={ onSelectedGenreChange }
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
// SearchBar.defaultProps = {
//   searchText: PropTypes.string,
//   onSearchTextChange: PropTypes.func,
//   bookmarkedOnly: PropTypes.func,
//   onBookmarkedChange: PropTypes.func,
//   selectedGenre: PropTypes.func,
//   onSelectedGenreChange: PropTypes.func,

// };
SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.func.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.func.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,

};

export default SearchBar;
