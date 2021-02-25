// implement AddMovie component here
// import { render } from '@testing-library/react';
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    // const {
    //   searchText,
    //   onSearchTextChange,
    //   bookmarkedOnly,
    //   onBookmarkedChange,
    //   selectedGenre,
    //   onSelectedGenreChange,
    // } = this.props;
    return <form data-testid="search-bar-form"> </form>;
  }
}

SearchBar.propTypes = {
  props: PropTypes.shape({
    searchText: PropTypes.string,
    onSearchTextChange: PropTypes.func,
    bookmarkedOnly: PropTypes.bool,
    onBookmarkedChange: PropTypes.func,
    selectedGenre: PropTypes.string,
    onSelectedGenreChange: PropTypes.func,
  }).isRequired,
};

export default SearchBar;
