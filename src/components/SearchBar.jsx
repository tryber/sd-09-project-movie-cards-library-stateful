import React, { Component } from 'react';

import InputType from './InputText';
import GenreType from './GenreType';

class SearchBar extends Component {
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
      <form data-testid="search-bar-form">
        <InputType
          label={ 'Inclui o texto:' }
          name={ 'search-text' }
          value= { searchText }
          onChange={ onSearchTextChange }
          testLabel={ 'text-input-label' }
          test={ 'text-input' }
        />
        <label htmlFor="bookmark" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            checked={ bookmarkedOnly }
            id="bookmark"
            name="bookmark"
            value={ searchText }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
          />
        </label>
        <GenreType
          name={ 'genre' }
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
        />
        
      </form>
    );
  }
}

{/* <div>
          <label htmlFor="genre" data-testid="select-input-label">
            Filtrar por gênero
          </label>
          <select
            name="genre"
            id="genre"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
            data-testid="select-input"
          >
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thiller">Suspense</option>
          </select>
        </div> */}
{/* <label htmlFor="search-text" data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            name="search-text"
            id="search-text"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label> */}

export default SearchBar;
