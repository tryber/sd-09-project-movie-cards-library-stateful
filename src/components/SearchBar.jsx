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
        <label>Inclui o texto:</label>
        <input></input>
        <form data-testid="search-bar-form">
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
