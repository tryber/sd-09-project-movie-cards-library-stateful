import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';
// import movies from './data';
import SearchBar from './components/SearchBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleGenreSelection = this.handleGenreSelection.bind(this);
    this.handleBookmarkChange = this.handleBookmarkChange.bind(this);
  }

  handleSearchInput(e) {
    this.setState({ searchText: e.target.value });
  }

  handleBookmarkChange() {
    this.setState((prevState) => ({ bookmarkedOnly: !prevState.bookmarkedOnly }));
  }

  handleGenreSelection(e) {
    this.setState({ selectedGenre: e.target.value });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;

    return (
      <div className="App">
        <Header />
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleSearchInput }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleBookmarkChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleGenreSelection }
        />
      </div>
    );
  }
}

export default App;
