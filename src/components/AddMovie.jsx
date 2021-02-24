import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action'
    }
  }

  render() {
    return (
      <form data-testid="add-movie-form">

      </form>
    );
  }
}

export default AddMovie;
