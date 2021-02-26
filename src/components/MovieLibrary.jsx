import React from 'react';
import PropType from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleShowAddMovieForm = this.handleShowAddMovieForm.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.handleAddMovieFavorite = this.handleAddMovieFavorite.bind(this);
    this.onClick = this.onClick.bind(this);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      showBoxAddMovie: false,
      movies,
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleFilter({ title, subtitle, genre, bookmarked, storyline }) {
    const { searchText, selectedGenre, bookmarkedOnly } = this.state;
    const searchInputTrue = title.includes(searchText)
      || subtitle.includes(searchText)
      || storyline.includes(searchText);
    if (searchText !== '' && searchInputTrue) return true;
    if (bookmarkedOnly && bookmarked) return true;
    if (genre === selectedGenre) return true;
  }

  handleShowAddMovieForm() {
    const { showBoxAddMovie } = this.state;
    this.setState({
      showBoxAddMovie: !showBoxAddMovie,
    });
  }

  handleAddMovieFavorite(titleFavorite) {
    this.setState((oldState) => {
      const favorite = oldState.movies.find((movie) => movie.title === titleFavorite);
      const valueBookmarked = favorite.bookmarked;
      favorite.bookmarked = !valueBookmarked;
      return ({
        movies: oldState.movies.map((movie) => {
          if (movie.title === titleFavorite) {
            return favorite;
          } return movie;
        }),
      });
    });
  }

  onBookmarkedChange({ target }) {
    const { checked } = target;
    this.setState({
      bookmarkedOnly: checked,
    });
  }

  onClick(state) {
    const { movies, showBoxAddMovie } = this.state;
    this.setState({
      movies: [...movies, state],
      showBoxAddMovie: !showBoxAddMovie,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies,
      showBoxAddMovie } = this.state;
    let moviesFiltred = movies.filter(this.handleFilter);
    if (moviesFiltred.length === 0) moviesFiltred = movies;

    return (
      <main>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.handleChange }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList
          movies={ moviesFiltred }
          handleShowAddMovieForm={ this.handleShowAddMovieForm }
          handleAddMovieFavorite={ this.handleAddMovieFavorite }
        />
        { showBoxAddMovie ? <AddMovie
          onClick={ this.onClick }
          handleShowAddMovieForm={ this.handleShowAddMovieForm }
        /> : null }
      </main>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropType.arrayOf(PropType.object),
};

MovieLibrary.defaultProps = {
  movies: [],
};

export default MovieLibrary;
