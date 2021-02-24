// implement AddMovie component here
import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const searchText = this.props;
    const onSearchTextChange = this.props;
    const bookmarkedOnly = this.props;
    const onBookmarkedChange = this.props;
    const selectedGenre = this.props;
    const onSelectedGenreChange = this.props;
    return (
      <nav>
        {/* <textarea value={this.state.value} onChange={this.handleChange} />
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="action">Action</option>
          <option value="fantasy">Fantasy</option>
          <option value="comedy">Comedy</option>
        </select> */}
      </nav>
    );
  }
}

export default SearchBar;
