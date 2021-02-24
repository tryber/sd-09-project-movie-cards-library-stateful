import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { filters } = this.props;
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange } = filters;
    return (
      <div data-testid="movie-list">
        <label data-testid="text-input-label" htmlFor="inputText">
          Inclui o texto:
          <input
            name="inputText"
            data-testid="text-input"
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="inputCheck">
          Mostrar somente favoritos
          <input
            name="inputCheck"
            data-testid="checkbox-input"
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
        </label>
        <span>{ selectedGenre }</span>
        <span>{ onSelectedGenreChange }</span>
      </div>
    );
  }
}

SearchBar.propTypes = {
  filters: PropTypes.shape({
    searchText: PropTypes.string,
    onSearchTextChange: PropTypes.func,
    bookmarkedOnly: PropTypes.bool,
    onBookmarkedChange: PropTypes.func,
    selectedGenre: PropTypes.string,
    onSelectedGenreChange: PropTypes.func,
  }).isRequired,
};

export default SearchBar;
