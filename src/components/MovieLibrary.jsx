import React from 'react';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import PropTypes from '.prop-types';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    // estado inical
    this.state = 
        searchText: '',
        bookmarkedOnly: false,
        selectedGenre: '',
        movies: props.movies
    }
  }
  render() {
    const { movies } = this.props;
    return (
      <section>
        <SearchBar />
        <AddMovie />
      </section>
    );
  }
}

MovieLibrary.PropTypes {

}
export default MovieLibrary;
