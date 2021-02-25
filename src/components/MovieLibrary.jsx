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
  }

  onClick({ subtitle, title, imagePath, storyline, rating, genre }) {
    console.log(subtitle, title, imagePath, storyline, rating, genre);
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar />
        <MovieList movies={this.props.movies} />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

export default MovieLibrary;
