// implement AddMovie component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    const{
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange } = this.props;

    return (

      <form data-testid="search-bar-form">
        <div>
          <label
            data-testid="text-input-label"
            htmlFor="inputSearch">Inclui o texto:
          </label>
          <input
            id="inputSearch" type="text" onChange={onSearchTextChange}
            value={searchText} data-testid="text-input"></input>
        </div>
        <div>
          <label data-testid="checkbox-input-label" htmlFor="inputCheckbox">
            Mostrar somente favoritos
            <input data-testid="checkbox-input" onChange={ onBookmarkedChange } checked={ bookmarkedOnly }
            id="inputCheckbox" type="checkbox"
            />
          </label>
        </div>
        <label data-testid="select-input-label" htmlFor="inputSelect">Filtrar por gênero
          <select data-testid="select-input" onChange={onSelectedGenreChange} value={selectedGenre} id="inputSelect">
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

export default SearchBar;
