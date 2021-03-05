import React from 'react';
import Subtitulo from './Subtitulo';
import Titulo from './Titulo';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <Titulo />
        <Subtitulo />
      </form>
    );
  }
}

export default AddMovie;
