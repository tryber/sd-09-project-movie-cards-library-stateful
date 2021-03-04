// implement AddMovie component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    return(
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label">Inclui o texto:
          <input
            type="text"
            data-testid="text-input"
            value={ this.props.searchText }
            onChange={ this.props.onSearchTextChange }
          />
        </label>
      </form>
    )
  }
}

export default SearchBar;

        // searchText={ searchText }
        // onSearchTextChange={ onSearchTextChange }
        // bookmarkedOnly={ bookmarkedOnly }
        // onBookmarkedChange={ onBookmarkedChange }
        // selectedGenre={ selectedGenre }
        // onSelectedGenreChange={ onSelectedGenreChange }
