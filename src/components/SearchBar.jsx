import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  // constructor(props) {
  //     super(props);
  //   }
  render() {
    const { searchText } = this.props;
    return (
    // <div>Make it so</div>
      <div>
        { searchText }
        <form data-testid="search-bar-form" />
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
//   onSearchTextChange: PropTypes.func.isRequired,
//   bookmarkedOnly: PropTypes.bool.isRequired,
//   onBookmarkedChange: PropTypes.func.isRequired,
//   selectedGenre: PropTypes.string.isRequired,
//   onSelectedGenreChange: PropTypes.string.isRequired,
};

export default SearchBar;
