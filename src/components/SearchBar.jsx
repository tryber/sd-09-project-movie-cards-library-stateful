import React from 'react';

class SearchBar extends React.Component{
  render(){
    const { searchText, 
      onsearchTextChange, 
      bookmarkedOnly, 
      onBookmarkedChange, 
      selectedGenre, 
      onSelectedGenreChange, } = this.props;
    return(
      <form data-testid="search-bar-form">
        <label 
          data-testid="text-input-label">
            Inclui o texto:
          <input
          type="text"
          value={ searchText }
          onChange={ onsearchTextChange } 
          data-testid="text-input"
          />
        </label>
        <label data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
          />
        </label>
        <label data-testid="select-input-label">
          Filtrar por genêro
          <select
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
            data-testid="select-option"
          >
            <option 
              data-testid="select-option"
              value=""
            >Todos</option>
            <option 
              data-testid="select-option"
              value="action"
            >Ação</option>
            <option 
              data-testid="select-option"
              value="comedy"
              >Comédia</option>
              data-testid="select-option"
            <option 
              value="thriller"
              >Suspense</option>
          </select>
        </label>
      </form>
      
    )
  }
}

export default SearchBar;
