// implement SearchBar component here
import React, { Component } from 'react';
import '../App.css'

class SearchBar extends Component {
    render() {
        const { onSearchTextChange, searchText, onBookmarkedChange, bookmarkedOnly, onSelectedGenreChange, selectedGenre } = this.props

        return(
<form data-testid="search-bar-form" className='SearchBar'>
  <label 
    htmlFor=""
    data-testid="text-input-label">
  Inclui o texto:
  <input type="text" 
    name='searchText' 
    onChange={ onSearchTextChange } 
    value={ searchText }
    data-testid="text-input"
    />
  </label>
  <label
    data-testid="checkbox-input-label"
    >
  Mostrar somente favoritos
  <input 
    name='bookmarkedOnly' 
    onChange={onBookmarkedChange} 
    checked={bookmarkedOnly}
    type="checkbox"
    data-testid="checkbox-input"
    />
  </label>
  <label  
    data-testid="select-input-label"
    >
    Filtrar por gênero
    <select name='selectedGenre' data-testid="select-input" value={selectedGenre} onChange={onSelectedGenreChange}>
      <option data-testid="select-option" value="">Todos</option>
      <option data-testid="select-option" value='action'>Ação</option>
      <option data-testid="select-option" value='comedy'>Comédia</option>
      <option data-testid="select-option" value='thriller'>Suspense</option>
    </select>
  </label>
</form>
        )
    }
}

export default SearchBar