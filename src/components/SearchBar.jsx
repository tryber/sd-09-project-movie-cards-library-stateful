import React from 'react';


class SearchBar extends React.Component {
  render() {
    const {  searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <div className="form">
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label">
            Inclui o texto:
            <input 
            data-testid="text-input" 
            type="text" 
            value={searchText}
            onChange={onSearchTextChange}/>
          </label>

          <label data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            data-testid="checkbox-input"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange} />
        </label>

        <label data-testid="select-input-label">
        Filtrar por gênero
          <select value={selectedGenre} data-testid="select-input" onChange={onSelectedGenreChange}>
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

export default SearchBar;