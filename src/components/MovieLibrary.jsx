// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
      inicialMovies: movies,
    };
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre,
      movies, inicialMovies } = this.state;
    const onSearchTextChange = (event) => {
      this.setState({
        searchText: event.target.value,
        movies: inicialMovies.filter((filme) => filme.title.includes(event.target.value)
          || filme.subtitle.includes(event.target.value)
          || filme.storyline.includes(event.target.value)),
      });
      if (event.target.value === '') this.setState({ movies: inicialMovies });
    };
    const onBookmarkedChange = (event) => {
      this.setState({ bookmarkedOnly: event.target.checked });
      if (event.target.checked) {
        this.setState({ movies: inicialMovies.filter((filme) => filme.bookmarked) });
      } else {
        this.setState({ movies: inicialMovies });
      }
    };
    const onSelectedGenreChange = (event) => {
      const select = event.target;
      const genre = select.options[select.selectedIndex].value;
      this.setState({
        selectedGenre: genre,
        movies: inicialMovies.filter((filme) => filme.genre === genre),
      });
      if (genre === '') this.setState({ movies: inicialMovies });
    };
    const onClick = (data) => {
      inicialMovies.push(data);
      this.setState({ movies: inicialMovies });
    };
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ onSearchTextChange }
          onBookmarkedChange={ onBookmarkedChange }
          onSelectedGenreChange={ onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
