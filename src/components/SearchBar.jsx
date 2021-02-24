import React from 'react';

export default class SearchBar extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;

    return (
      <input ></input>
    );
  }
}
