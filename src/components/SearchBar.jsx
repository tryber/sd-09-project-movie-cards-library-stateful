// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  // constructor() {
  //   super()
  // }

  // handleChange (event) {
  //   this.setState({})
  // }
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
      <session>
        <h4>SearchBar</h4>
        <form data-testid="search-bar-form">
          <label
            data-testid="text-input-label"
            htmlFor={ searchText }
          >
            Inclui o Texto:
            <input
              data-testid="text-input"
              type="text"
              id={ searchText }
              value={ searchText }
              onChange={ onSearchTextChange }
            />
          </label>
          <label
            data-testid="checkbox-input-label"
            htmlFor={ bookmarkedOnly }
          >
            Mostrar somente favoritos
            <input
              data-testid="checkbox-input"
              type="bool"
              value={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
            />
          </label>
          <input
            type="text"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
          />
        </form>
      </session>
    );
  }
}
SearchBar.propTypes = ({
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
});

export default SearchBar;
