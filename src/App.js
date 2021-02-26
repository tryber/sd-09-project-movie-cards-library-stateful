import React, { Component } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  handleSearchTextChange() {}

  handleBookmarkedChange() {}

  handleSelectedGenreChange() {}

  handleAddMovieClick() {
    
  }

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
        <AddMovie onClick={this.handleAddMovieClick} />
      </div>
    );
  }
}

export default App;
