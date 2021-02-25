import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

export default class MovieLibrary extends React.Component {

  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  onSearchTextChange = () => {};

  onBookmarkedChange = () => {};

  onSelectedGenreChange = () => {};

  render() {
    const { movies } = this.state;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange=""
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange=""
          selectedGenre={ selectedGenre }
          onSelectedGenreChange=""
        />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}
