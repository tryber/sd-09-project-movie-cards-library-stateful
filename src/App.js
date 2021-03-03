import React from 'react';
// import SearchBar from './components/SearchBar';
import Header from './components/Header';
// import MovieList from './components/MovieList';
// import movies from './data';
import MovieLibrary from './components/MovieLibrary';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieLibrary />
        {/* <SearchBar />
        <MovieList movies={ movies } /> */}
      </div>
    );
  }
}

export default App;
