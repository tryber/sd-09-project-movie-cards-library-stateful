import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      // searchText: '',
      // bookmarkedOnly: false,
      // selectedGenre: '',
      movies,
    };
    this.addMovieToList = this.addMovieToList.bind(this);
    this.filterData = this.filterData.bind(this);
  }

  addMovieToList(movieObject) {
    const { movies } = this.state;
    movies.push(movieObject);
    this.setState({ movies });
  }

  filterData(event) {
    console.log(event);
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar filterData={ this.filterData } />
        <MovieList movies={ movies } />
        <AddMovie addMovieToList={ this.addMovieToList } />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.array }.isRequired;

export default MovieLibrary;
