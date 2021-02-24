// implement AddMovie component here
import React, { Component } from 'react';
import RatingInput from './RatingInput';

class AddMovie extends Component {
  constructor() {
    super();

    this.changeState = this.changeState.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  changeState({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { onClick } = this.props;

    return (
      <form data-testid="add-movie-form">
        <label htmlFor="titleInput" data-testid="title-input-label">
          Título
          <input
            name="title"
            type="text"
            data-testid="title-input"
            value={ this.state.title }
            onChange={ this.changeState }
          />
        </label>
        <label htmlFor="subtitleInput" data-testid="subtitle-input-label">
          Subtítulo
          <input
            name="subtitle"
            type="text"
            data-testid="subtitle-input"
            value={ this.state.subtitle }
            onChange={ this.changeState }
          />
        </label>
        <label htmlFor="imageInput" data-testid="image-input-label">
          Imagem
          <input
            name="imagePath"
            type="text"
            value={ this.state.imagePath }
            data-testid="image-input"
            onChange={ this.changeState }
          />
        </label>
        <label htmlFor="sinopse" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            value={ this.state.storyline }
            data-testid="storyline-input"
            onChange={ this.changeState }
          />
        </label>
        <RatingInput value={this.state.rating} changeState={this.changeState} />
      </form>
    );
  }
}

export default AddMovie;
