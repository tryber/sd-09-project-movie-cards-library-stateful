// implement AddMovie component here
import React from 'react'
import Proptypes from 'prop-types'

class SearchBar extends React.Component {
  render () {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre } = this.props
    return (
      <div>
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label">
            Inclui o texto:
            <input type="text" value={ searchText } onChange={ onSearchTextChange } data-testid="text-input" />
          </label>
          <label data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input type="checkbox" checked={ bookmarkedOnly } onChange={ onBookmarkedChange } data-testid="checkbox-input" />
          </label>
        </form>
      </div>    
    )
  }
}

SearchBar.proptypes = {
  searchText: Proptypes.string.isRequired,
  onSearchTextChange: Proptypes.func.isRequired,
  bookmarkedOnly: Proptypes.bool.isRequired,
  onBookmarkedChange: Proptypes.func.isRequired,
  selectedGenre: Proptypes.string.isRequired,
  OnSelectedGenre: Proptypes.func.isRequired,
};

export default SearchBar;
