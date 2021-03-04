import React from 'react';


class SearchBar extends React.Component {
  render() {
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label">Inclui o texto</label>
          <input data-testid="text-input"
            type='text'
            value={this.props.searchText}
            onChange={this.props.onSearchTextChange}>
          </input>
        <label data-testid="checkbox-input-label">Mostrar somente favoritos</label>
          <input data-testid="text-input"
            checked={this.props.bookmarkedOnly}
            type='text' data-testid="checkbox-input"
            onChange={this.props.onBookmarkedChange}>
          </input>

          <label data-testid="select-input-label">Filtrar por gênero</label>
          <select
          data-testid="select-input"
          value = 'selectedGenre'
          onChange = {this.props.onSelectedGenreChange}>
            <option data-testid="select-option" value = ''>Todos</option>
            <option data-testid="select-option" value = 'action'>Ação</option>
            <option data-testid="select-option" value = 'comedy'>Comédia</option>
            <option data-testid="select-option" value = 'thriller'>Suspense</option>
          </select>




      </form>
    );
  }
}

export default SearchBar;
