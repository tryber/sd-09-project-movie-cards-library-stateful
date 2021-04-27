import React from 'react';
import Header from './components/Header';
import './App.css';
import movies from './data';
import MovieLibrary from './components/MovieLibrary';

class App extends React.Component {
  constructor() {
    super();
    this.state = { movie: movies };
  }

  render() {
    const { movie } = this.state;
    return (
      <div className="App">
        <Header />
        <MovieLibrary movies={ movie } />
      </div>
    );
  }
}

export default App;
