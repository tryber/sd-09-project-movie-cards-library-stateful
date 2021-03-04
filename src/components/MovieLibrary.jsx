import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.AddMovie = this.AddMovie.bind(this);
    this.upSearch = this.upSearch.bind(this);
    this.upBook = this.upBook.bind(this);
    this.upSelect = this.upSelect.bind(this);
    this.filter = this.filter.bind(this);
    this.filterBookMark = this.filterBookMark.bind(this);
    this.filterSelect = this.filterSelect.bind(this);

    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  AddMovie(movieToAdd) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, movieToAdd],
    });
  }

  upSearch(content) {
    const { value } = content.target;
    this.setState({ searchText: value });
  }

  upBook() {
    const { bookmarkedOnly, movies } = this.state;
    const inv = !bookmarkedOnly;
    this.setState({ bookmarkedOnly: inv });
    this.filterBookMark(movies, inv);
  }

  upSelect(element) {
    const { value } = element.target;
    this.setState({ selectedGenre: value });
    this.filterSelect(value);
  }

  filterSelect(value) {
    const { movies } = this.state;

    if (value !== 'todos') {
      const newArray = movies.filter((element) => element.genre === value);
      this.setState({ movies: newArray });
    }
  }

  filterBookMark(moviesArg, inv) {
    if (inv) {
      const newArray = moviesArg.filter((element) => {
        const { bookmarked } = element;
        return bookmarked === inv;
      });
      this.setState({ movies: newArray });
    } else {
      const { movies } = this.props;
      this.setState({ movies });
    }
  }

  filter(movies, state) {
    if (state.searchText === '') {
      return movies;
    }

    return movies.filter((element) => {
      const { searchText } = state;
      const { title, subtitle, storyline } = element;

      const search = searchText.toLowerCase();
      const elementTitle = title.toLowerCase();
      const elementSubTitle = subtitle.toLowerCase();
      const elementStoryline = storyline.toLowerCase();

      return (elementTitle.includes(search)
        || elementSubTitle.includes(search)
        || elementStoryline.includes(search)
      );
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.upSearch }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.upBook }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.upSelect }
        />

        <MovieList movies={ this.filter(movies, this.state) } />

        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.array,
}.isRequired;

export default MovieLibrary;
