import React from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;

    this.onSearchText = this.onSearchText.bind(this);
    this.onBookmarked = this.onBookmarked.bind(this);
    this.onSelectedGenre = this.onSelectedGenre.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [...movies],
    };
  }

  onSearchText(event) {
    this.setState({ searchText: event.target.value });
  }

  onBookmarked(event) {
    console.log(event.target.checked);
    this.setState({ bookmarkedOnly: event.target.checked });
  }

  onSelectedGenre(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  render() {
    // const { movies } = this.props;
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2>My awesome movie library</h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchText }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarked }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenre }
        />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.number,
      imagePath: PropTypes.string,
      bookmarked: PropTypes.bool,
      genre: PropTypes.string,
    }),
  ).isRequired,
};

export default MovieLibrary;
