import React from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;

    return (
      <section>
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label">Inclui o texto:</label>
          <input type="text" name="" value={ searchText } onChange={ onSearchTextChange } data-testid="text-input"></input>
        </form>
      </section>
    );
  }
}

SearchBar.propTypes = {
  search: PropTypes.string,
  bookmarkedOnly: PropTypes.bool,
  selectedGenre: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  onBookmarkedChange: PropTypes.func,
  onSelectedGenreChange: PropTypes.func,
}.isRequired;
