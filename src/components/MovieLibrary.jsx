import React, { Component } from 'react';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    /* this.handleSearch = this.handleSearch.bind(this); */
    this.state = {
      searchText: '',
      /* onSearchTextChange: '', */
      bookmarkedOnly: false,
      /* onBookmarkedChange: '', */
      selectedGenre: '',
      /* onSelectedGenreChange: '' */
    };
  }

  /* handleSearch({ event }) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  } */

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
    } = this.state;
    return (
      <div>
        <h2>My awesome movie library</h2>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
        />
      </div>
    );
  }
}

export default MovieLibrary;
