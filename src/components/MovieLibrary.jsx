import React from 'react';
// import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    // this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  onSearchTextChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  // onBookmarkedChange() {
  //   this.setState((previusState) => {
  //     if(!bookmarkedOnly) { previusState.bookmarkedOnly: bookmarkedOnly }
  //   });
  // }

  onSelectedGenreChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    // const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.onSearchTextChange }
          // onBookmarkedChange={ this.onBookmarkedChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <AddMovie />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

// MovieLibrary.PropType = {
//   movies: PropTypes.arrayOf(PropTypes.object).isRequired,
// };

export default MovieLibrary;
