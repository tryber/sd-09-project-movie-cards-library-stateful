import React from 'react';

class MovieLibrary extends React.Component {
  render() {
    const { props: { movies } } = this;
    return (<p>MovieLibrary</p>);
  }
}

export default MovieLibrary;
