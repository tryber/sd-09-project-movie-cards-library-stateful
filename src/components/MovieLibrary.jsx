// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';


class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    const movies = this.props.movies;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: movies,
    };
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const { movies } = this.props;
    const inicialMovies = movies;

    const onSearchTextChange = (event) => {
      this.setState({
        searchText: event.target.value,
        movies: inicialMovies.filter((filme) => {
          return filme.title.includes(event.target.value)
            || filme.subtitle.includes(event.target.value)
            || filme.storyline.includes(event.target.value);
        })
      });
    };

    const onBookmarkedChange = (event) => {
      this.setState({
        bookmarkedOnly: event.target.checked ? true : false,
      });
      if (event.target.checked) {
        this.setState({
          movies: inicialMovies.filter((filme) => filme.bookmarked)
        })
      } else {
        this.setState({
          movies: inicialMovies,
        });
      };
    };

    const onSelectedGenreChange = (event) => {
      const genre = event.target.options[event.target.selectedIndex].value;
      this.setState({
        selectedGenre: genre,
        movies: inicialMovies.filter((filme) => filme.genre === genre)
      });
      if (genre === '') {
        this.setState({
          movies: inicialMovies,
        });
      };
    };

    const onClick = (filme) => {
      // inicialMovies.append(filme);
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
        <AddMovie onClick={ onClick }/>
      </div>
    );
  };
}

// MovieLibrary.propTypes = {
//   movies: PropTypes.array,
// }

export default MovieLibrary;
