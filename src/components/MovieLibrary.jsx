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
    const { value } = target;
    this.setState({
      selectedGenre: value,
    });
  }

  render() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;

    const searchList = movies.filter(({ title, subtitle, storyline }) => {
      return title.toUpperCase().includes(searchText.toUpperCase())
      || subtitle.toUpperCase().includes(searchText.toUpperCase())
      || storyline.toUpperCase().includes(searchText.toUpperCase());
    });

    // Recuperar os filmes com bookmarked = true
    // Filter tem que retornar o card com o bookmarked = true
    const searchBookmarked = searchList.filter(({ bookmarked }) => {
      return bookmarkedOnly ? bookmarked === true : true;
    });

    const searchGenre = searchBookmarked.filter(({ genre }) => {
      return genre.includes(selectedGenre);
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
        <MovieList movies={ searchGenre } />
      </section>
    );
  }
}

export default MovieLibrary;
