import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
          <label data-testid="text-input-label" htmlFor="search-text-input">
            Inclui o texto:
            <input
              id="search-text-input"
              data-testid="text-input"
              value={ searchText }
              onChange={ (ev) => onSearchTextChange(ev.target.value) }
              type="text"
            />
          </label>
          <label data-testid="checkbox-input-label" htmlFor="bookmarkedOnly-input">
            Mostrar somente favoritos
            <input
              type="checkbox"
              id="bookmarkedOnly-input"
              checked={ bookmarkedOnly }
              onChange={ (ev) => onBookmarkedChange(ev.target.checked) }
              data-testid="checkbox-input"
            />
          </label>
          <label htmlFor="genre-select" data-testid="select-input-label">
            Filtrar por gênero
            <select
              value={ selectedGenre }
              onChange={ (ev) => onSelectedGenreChange(ev.target.value) }
              id="genre-select"
              data-testid="select-input"
            >
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
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
