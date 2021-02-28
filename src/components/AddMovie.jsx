import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Input
          dataTestIdLabel="title-input-label"
          labelTitle="Título"
          id="title-input"
          name="title"
          type="text"
          value={ title }
          dataTestIdInput="title-input"
          onChange={ this.handleChange }
        />
        <Input
          dataTestIdLabel="subtitle-input-label"
          labelTitle="Subtítulo"
          id="subtitle-input"
          name="subtitle"
          type="text"
          value={ subtitle }
          dataTestIdInput="subtitle-input"
          onChange={ this.handleChange }
        />
        <Input
          dataTestIdLabel="image-input-label"
          labelTitle="Imagem"
          id="image-input"
          name="imagePath"
          type="text"
          value={ imagePath }
          dataTestIdInput="image-input"
          onChange={ this.handleChange }
        />
        <Input
          dataTestIdLabel="storyline-input-label"
          labelTitle="Sinopse"
          id="storyline-input"
          name="storyline"
          type="textarea"
          value={ storyline }
          dataTestIdInput="storyline-input"
          onChange={ this.handleChange }
        />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
