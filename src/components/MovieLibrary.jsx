import React from 'react';
import { string, bool, array } from 'prop-types';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [],
    };
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

export default MovieLibrary;
