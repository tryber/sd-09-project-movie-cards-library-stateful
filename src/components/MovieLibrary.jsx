import React, { Component } from 'react';
import { arrayOf, shape, string, number, bool } from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleGenreSelection = this.handleGenreSelection.bind(this);
    this.handleBookmarkChange = this.handleBookmarkChange.bind(this);
    this.filteredMovieList = this.filteredMovieList.bind(this);
  }

  handleSearchInput(e) {
    this.setState({ searchText: e.target.value });
  }

  handleBookmarkChange() {
    this.setState((prevState) => ({ bookmarkedOnly: !prevState.bookmarkedOnly }));
  }

  handleGenreSelection(e) {
    this.setState({ selectedGenre: e.target.value });
  }

  filteredMovieList() {
    const { movies } = this.props;
    const { searchText } = this.state;
    const re = new RegExp(searchText, 'i');
    return !searchText ? movies
      : movies.filter(({ title, subtitle, storyline }) => (
        [re.test(title), re.test(subtitle), re.test(storyline)].some((value) => value)
      ));
  }

  render() {
    const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;

    return (
      <section>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleSearchInput }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleBookmarkChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleGenreSelection }
        />
        <MovieList
          movies={
            this.filteredMovieList()
              ? this.filteredMovieList()
              : movies
          }
        />
        <AddMovie />
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  movies: arrayOf(shape({
    title: string,
    subtitle: string,
    storyline: string,
    rating: number,
    imagePath: string,
    bookmarked: bool,
    genre: string,
  })),
};

MovieLibrary.defaultProps = {
  movies: [
    {
      title: 'Movie title',
      subtitle: 'Movie subtitle',
      storyline: 'Movie storyline',
      rating: 0,
      imagePath: 'Image path to movie banner',
      bookmarked: false,
      genre: 'Movie genre',
    },
  ],
};
