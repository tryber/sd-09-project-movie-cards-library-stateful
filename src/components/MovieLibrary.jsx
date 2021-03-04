// implement AddMovie component here
import React, { Component } from 'react';
import data from '../data';
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
      movies: [...data],
    };
  }

  handleChangeLibrary({ target }) {
    const { name } = target;
    const { value } = target;
    // declação coringa vista no conteudo
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          movies={ movies }
          searchText={ searchText }
          handleChangeLibrary={ this.handleChangeLibrary }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
        />
        <AddMovie />
        <MovieList />
      </div>
    );
  }
}

export default MovieLibrary;
