// implement AddMovie component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <form data-testid="search-bar-form">
          <label for="input-searchText" data-testid="text-input-label">Inclui o texto</label>
          <input
            type="text"
            id="input-searchText"
            data-testid="text-input"
            value={ this.props.searchText }
            onChange={ this.props.onSearchTextChange }
          />
          <input
            type="checkbox"
            id="input-checkbox"
            data-testid="checkbox-input"
            checked={ this.props.bookmarkedOnly }
            onChange={ this.props.onBookmarkedChange }
          />
          <label for="input-checkbox" data-testid="checkbox-input-label" >Mostrar somente favoritos</label>
          <label for="select-genre" data-testid="select-input-label">Filtrar por gênero</label>
          <select
          value={this.props.selectedGenre}
          id="select-genre"
          data-testid="select-input"
          onChange={ this.props.onSelectedGenreChange }
          >
            <option value="" data-testid="select-option">Todos</option>
            <option value="action" data-testid="select-option">Ação</option>
            <option value="comedy" data-testid="select-option">Comédia</option>
            <option value="thriller" data-testid="select-option">Suspense</option>
          </select>
        </form>
      </div>
    );
  }
}

export default SearchBar;
