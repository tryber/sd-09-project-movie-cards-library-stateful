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
    this.addCard = this.addCard.bind(this);

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
    this.setState({ bookmarkedOnly: event.target.checked });
  }

  onSelectedGenre(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  // filterText => abstração da lógica com o auxílio do Johne Alves - Turma 9
  filterText(param1, param2) {
    return param1
      .filter((element) => element.title.toUpperCase().includes(param2.toUpperCase())
      || element.subtitle.toUpperCase().includes(param2.toUpperCase())
      || element.storyline.toUpperCase().includes(param2.toUpperCase()));
  }

  filterBookmarked(param1, param2) {
    if (param2 === true) return param1.filter((element) => element.bookmarked === true);
    return param1;
  }

  filterGenre(param1, param2) {
    return param1.filter((element) => element.genre.includes(param2));
  }

  // addCard => abstração da lógica com o auxílio do Johne Alves - Turma 9
  addCard(param) {
    this.setState((prevStates) => ({
      movies: [...prevStates.movies, param],
    }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    let { movies } = this.state;
    // lógica das chamadas de funções com o auxílio do Johne Alves - Turma 9
    movies = this.filterText(movies, searchText);
    movies = this.filterBookmarked(movies, bookmarkedOnly);
    movies = this.filterGenre(movies, selectedGenre);
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
        <AddMovie onClick={ this.addCard } />
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
