// implement AddMovie component here
import React from 'react';

import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      movies,
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick(insertMovie) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, insertMovie],
    });
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        <SearchBar />

        <h2> My awesome movie library </h2>

        <MovieList movies={ movies } />

        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
