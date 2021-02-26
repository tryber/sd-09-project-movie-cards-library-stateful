import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: "",
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }
  }

  render() {
    return (
      <form action="" data-testid="add-movie-form">
        <p>AddMovie</p>
      </form>
    );
  }
}

export default AddMovie;