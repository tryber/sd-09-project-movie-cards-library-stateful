import React from 'react';
import Titulo from './auxiliaries/Titulo';
import Subtitulo from './auxiliaries/Subtitulo';
import Imagem from './auxiliaries/Imagem';
import Sinopse from './auxiliaries/Sinopse';
import Avaliacao from './auxiliaries/Avaliacao';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.titleChange = this.titleChange.bind(this);
    this.subtitleChange = this.subtitleChange.bind(this);
    this.imageChange = this.imageChange.bind(this);
    this.storylineChange = this.storylineChange.bind(this);
    this.ratingChange = this.ratingChange.bind(this);

    this.state = ({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
    });
  }

  titleChange(event) {
    this.setState({ title: event.target.value });
  }

  subtitleChange(event) {
    this.setState({ subtitle: event.target.value });
  }

  imageChange(event) {
    this.setState({ imagePath: event.target.value });
  }

  storylineChange(event) {
    this.setState({ storyline: event.target.value });
  }

  ratingChange(event) {
    this.setState({ rating: event.target.value });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Titulo onValue={ title } change={ this.titleChange } />
        <Subtitulo onValue={ subtitle } change={ this.subtitleChange } />
        <Imagem onValue={ imagePath } change={ this.imageChange } />
        <Sinopse onValue={ storyline } change={ this.storylineChange } />
        <Avaliacao onValue={ rating } change={ this.ratingChange } />
      </form>
    );
  }
}

export default AddMovie;
