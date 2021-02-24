import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    // const {
    //   searchText,
    //   onSearchTextChange,
    //   bookmarkedOnly,
    //   onBookmarkedChange,
    //   selectedGenre,
    //   onSelectedGenreChange
    // } = this.props;
    return (
      <form className="form">
        <label htmlFor="searchText">
          Inclui o texto
          <input className="searchText" id="searchText" type="text" />
        </label>
        <label htmlFor="bookmarkedOnly">
          Mostrar somente favoritos
          <input className="bookmarkedOnly" id="bookmarkedOnly" type="checkbox" />
        </label>
      </form>
    );
  }
}

// SearchBar.propTypes = {
//   searchText: PropTypes.string,
//   onSearchTextChange: PropTypes.func,
//   bookmarkedOnly: PropTypes.bool,
//   onBookmarkedChange: PropTypes.func,
//   selectedGenre: PropTypes.string,
//   onSelectedGenreChange: PropTypes.func,
// };
// SearchBar.defaultProps = {
//   searchText: null,
//   onSearchTextChange: null,
//   bookmarkedOnly: false,
//   onBookmarkedChange: null,
//   selectedGenre: null,
//   onSelectedGenreChange: null,
// };

export default SearchBar;
