// implement AddMovie component here
import React, { Component } from 'react';
import movies from '../data';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.handleChangeLibrary = this.handleChangeLibrary.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [...movies],
    };
  }

  handleChangeLibrary({ target }) {
    const { name } = target;
    const value = target.value;
    // declação coringa vista no conteudo
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <SearchBar
          movies={ this.state.movies }
          searchText={ this.state.searchText }
          handleChangeLibrary={ this.handleChangeLibrary }
          bookmarkedOnly={ this.state.bookmarkedOnly }
          selectedGenre={ this.state.selectedGenre }
        />
        <AddMovie
        movies={ this.movies }
        handleChangeLibrary={ this.handleChangeLibrary }
        />
        <MovieList />
      </div>
    );
  }
}

export default MovieLibrary;
