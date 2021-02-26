// implement AddMovie component here
import React, { Component } from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    // Requisito 17
    this.changeSearchText = this.changeSearchText.bind(this);
    this.changeBookmark = this.changeBookmark.bind(this);
    this.changeGenre = this.changeGenre.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [...movies],
    };
  }

  changeSearchText({ target }) {
    const { value } = target;
    this.setState({
      searchText: value,
    });
  }

  changeBookmark({ target }) {
    const { checked } = target;
    this.setState({
      bookmarkedOnly: checked,
    });
    // if (checked) {
    //   this.setState({
    //     bookmarkedOnly: true,
    //   });
    // } else {
    //   this.setState({
    //     bookmarkedOnly: false,
    //   });
    // }
  }

  changeGenre({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {

    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;

    const searchList = movies.filter(({ title, subtitle, storyline }) => {
      return title.toUpperCase().includes(searchText.toUpperCase())
      || subtitle.toUpperCase().includes(searchText.toUpperCase())
      || storyline.toUpperCase().includes(searchText.toUpperCase());
    });

    const searchBookmarked = searchList.filter(({ bookmarked }) => {
      // Recuperar os filmes com bookmarked = true
      // Filter tem que retornar o card com o bookmarked = true

      return bookmarkedOnly ? bookmarked === true : true;

      // if (this.state.bookmarkedOnly) {
      //   return movie.bookmarked === true;
      // }
      // return true;
    });

    return (
      <section>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.changeSearchText }
          onBookmarkedChange={ this.changeBookmark }
          onSelectedGenreChange={ this.changeGenre }
        />
        <MovieList movies={ searchBookmarked } />
      </section>
    );
  }
}

export default MovieLibrary;
