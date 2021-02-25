// implement AddMovie component here
import React, { Component } from "react";

import MovieList from "./MovieList";
import SearchBar from "./SearchBar";
import AddMovie from "./AddMovie";

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: "",
      bookmarkedOnly: false,
      selectedGenre: "",
      movies: this.props.movies
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.filteredMovies = this.filteredMovies.bind(this);
  }

  onClick({ subtitle, title, imagePath, storyline, rating, genre }) {
    console.log(subtitle, title, imagePath, storyline, rating, genre);
  }

  onSearchTextChange(event) {
    this.setState({
      searchText: event.target.value
    });
  }

  onBookmarkedChange(event) {
    this.setState({
      bookmarkedOnly: event.target.checked
    });
  }

  onSelectedGenreChange(event) {
    this.setState({
      selectedGenre: event.target.value
    });
  }

  filteredMovies(movies) {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;

    let newArray =  movies.filter(movie => movie.title.toLowerCase().includes(searchText) || movie.subtitle.toLowerCase().includes(searchText) || movie.storyline.toLowerCase().includes(searchText));

    if (bookmarkedOnly) {
      newArray = newArray.filter(movie => movie.bookmarked === bookmarkedOnly);
    }

    if (selectedGenre !== '') {
      newArray = newArray.filter(movie => movie.genre === selectedGenre);
    }

    return newArray;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.filteredMovies(movies)} />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

export default MovieLibrary;
