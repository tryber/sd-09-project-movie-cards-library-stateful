import React, {Components} from 'react';

class SearchBar extends Components() {
  render() {
  const {searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label">
            Inclui o texto"
            <input data-testid="text-input" type="text" onChange={ onSearchTextChange } value={ searchText } />
          </label>
          <label data-testid="checkbox-input-label">
            Mostrar somente favoritos
            
          </label>  
        </form>
      </div>
    );
  }
}

export default SearchBar;
