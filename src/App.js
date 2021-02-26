import React, { Component } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  handleSearchTextChange() {}

  handleBookmarkedChange() {}

  onSelectedGenreChange() {}

  render() {
    return (
      <div className='App'>
        <Header />
        <SearchBar
          searchText=''
          selectedGenre=''
          bookmarkedOnly={false}
          onSearchTextChange={this.handleSearchTextChange}
          onBookmarkedChange={this.handleBookmarkedChange}
          onSelectedGenreChange={this.handleSelectedGenreChange}
        />
      </div>
    );
  }
}

export default App;
