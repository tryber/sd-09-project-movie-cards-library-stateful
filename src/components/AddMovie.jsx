import React, { Component } from 'react';

class AddMovie extends Component {
  render() {
    const {
      subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.props;
    return(
      <form data-testid="add-movie-form">

      </form>
    );
  }
}

export default AddMovie;
