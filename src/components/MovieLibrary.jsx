import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.newFilm = this.newFilm.bind(this);
    this.fitredMovies = this.fitredMovies.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  handleChange({ target }) {
    const { name } = target;
    let value = '';
    if (target.type === 'checkbox') {
      value = true;
    } else {
      value = target.value;
    }

    this.setState({ [name]: value });
  }

  newFilm(param) {
    this.setState((prevState) => ({
      movies: [...prevState.movies, {
        title: param.title,
        subtitle: param.subtitle,
        storyline: param.storyLine,
        rating: param.rating,
        imagePath: param.imagePath,
        bookmarked: true,
        genre: param.genre,
      }],
    }));
  }

  fitredMovies(movies) {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    let filter = movies;
    filter = filter
      .filter((movie) => movie.title.toUpperCase().includes(searchText.toUpperCase())
     || movie.subtitle.toUpperCase().includes(searchText.toUpperCase())
     || movie.storyline.toUpperCase().includes(searchText.toUpperCase()))
      .filter((movie) => movie.genre.includes(selectedGenre));
    if (bookmarkedOnly === true) {
      filter = filter.filter((movie) => movie.bookmarked === true);
    }
    return filter;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    let { movies } = this.state;
    movies = this.fitredMovies(movies);
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList
          movies={ movies }
        />
        <AddMovie onClick={ this.newFilm } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
