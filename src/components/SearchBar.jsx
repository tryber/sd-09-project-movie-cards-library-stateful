// implement AddMovie component here
import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { searchText,
      onSearchTextChange,
      bookmarkedOmly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,

    } = this.props;

    return (
      <form data-testid="search-bar-form" />
    );
  }
}

export default SearchBar;
