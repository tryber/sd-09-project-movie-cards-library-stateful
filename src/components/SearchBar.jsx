import React from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange } = this.props;

    return (
      <section>
        <form data-testid="search-bar-form">
          <div>
            <label htmlFor="search" data-testid="text-input-label"> Inclui o texto:</label>
            <input
              data-testid="text-input" type="text"
              name="search" value={ searchText } onChange={ onSearchTextChange } />
          </div>
          <div>
            <label
              htmlFor="checkbox" data-testid="checkbox-input-label">
              Mostrar somente favoritos
            </label>
            <input
              type="checkbox" name="checkbox" data-testid="checkbox-input"
              checked={ bookmarkedOnly } onChange={ onBookmarkedChange } />
          </div>
          <div>
            <label
              data-testid="select-input-label">Filtrar por gênero</label>
            <select
              data-testid="select-input"
              value={ selectedGenre }
              onChange={ onSelectedGenreChange }>
              <option
                title="" value=""
                data-testid="select-option">Todos</option>
              <option
                title="action" value="action"
                data-testid="select-option">Ação</option>
              <option
                title="comedy" value="comedy"
                data-testid="select-option">Comédia</option>
              <option
                data-testid="select-option" title="thriller"
                value="thriller">Suspense</option>
            </select>
          </div>
        </form>
      </section>
    );
  }
}

SearchBar.propTypes = {
  search: PropTypes.string,
  bookmarkedOnly: PropTypes.bool,
  selectedGenre: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  onBookmarkedChange: PropTypes.func,
  onSelectedGenreChange: PropTypes.func,
}.isRequired;
