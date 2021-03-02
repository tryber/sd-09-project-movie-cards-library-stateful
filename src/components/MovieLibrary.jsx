import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.HandleChange = this.HandleChange.bind(this);
  }

  HandleChange({ target }) {
    const { name, value } = target;
    if (target.type === 'checkbox') {
      const isBookmarked = target.checked;
      this.setState({ bookmarkedOnly: isBookmarked });
    } else {
      this.setState({ [name]: value });
    }
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.HandleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.HandleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.HandleChange }
        />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

export default MovieLibrary;
