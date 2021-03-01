// implement AddMovie component here
import React, { Component } from 'react';
import RatingInput from './RatingInput';
import GenreSelect from './GenreSelect';
import Button from './Button';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.changeState = this.changeState.bind(this);
    this.submitForm = this.submitForm.bind(this);

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

  submitForm() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="titleInput" data-testid="title-input-label">
          Título
          <input
            name="title"
            type="text"
            data-testid="title-input"
            value={ title }
            onChange={ this.changeState }
          />
        </label>
        <label htmlFor="subtitleInput" data-testid="subtitle-input-label">
          Subtítulo
          <input
            name="subtitle"
            type="text"
            data-testid="subtitle-input"
            value={ subtitle }
            onChange={ this.changeState }
          />
        </label>
        <label htmlFor="imageInput" data-testid="image-input-label">
          Imagem
          <input
            name="imagePath"
            type="text"
            value={ imagePath }
            data-testid="image-input"
            onChange={ this.changeState }
          />
        </label>
        <label htmlFor="sinopse" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ this.changeState }
          />
        </label>
        <RatingInput value={ rating } changeState={ this.changeState } />
        <GenreSelect value={ genre } changeState={ this.changeState } />
        <Button submitForm={ this.submitForm } />
      </form>
    );
  }
}

export default AddMovie;
