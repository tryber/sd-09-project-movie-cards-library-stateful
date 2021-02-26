import React from 'react';
import { arrayOf, objectOf } from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.moviesFiltered = this.moviesFiltered.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  onSearchTextChange(event) {
    const { value } = event.target;
    this.setState({
      searchText: value,
    });
    this.moviesFiltered(value);
  }

  onBookmarkedChange(event) {
    const { checked } = event.target;
    this.setState({
      bookmarkedOnly: checked,
    });
    this.moviesFiltered(checked);
  }

  onSelectedGenreChange(event) {
    const { value } = event.target;
    this.setState({
      selectedGenre: value,
    });
    this.moviesFiltered(value);
  }

  moviesFiltered(filter) {
    const { movies } = this.props;
    this.setState({
      movies: movies
        .filter(({ title, subtitle, storyline, bookmarked, genre }) => (
          title.toLowerCase().includes(filter)
          || subtitle.toLowerCase().includes(filter)
          || storyline.toLowerCase().includes(filter)
          || bookmarked === filter
          || genre.includes(filter)
        )),
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: arrayOf(objectOf).isRequired,
};

export default MovieLibrary;
