import React, { Component } from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import movies from '../data';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    // const { movies } = this.props;

    // HANDLER GENÉRICO
    // handleChange = ({ target }) => {
    //   const { name } = target;
    //   const value = target.type === 'checkbox' ? target.checked : target.value;
    //   this.setState({
    //     [name]: value,
    //   });
    // }

    this.state = {
      // searchText: '',
      // bookmarkedOnly: false,
      // selectedGenre: '',
    };
  }

  render() {
    return (
      <section>
        <h2>My awesome movie library</h2>
        <SearchBar />
        <MovieList movies={ movies } />
        <AddMovie />
      </section>
    );
  }
}

export default MovieLibrary;
