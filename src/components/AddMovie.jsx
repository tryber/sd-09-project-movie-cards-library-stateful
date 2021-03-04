import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from './Input';
import TextArea from './TextArea';
import GenreType from './GenreType';
import Button from './Button';

const stateDefault = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = stateDefault;

    this.handleInputTextChange = this.handleInputTextChange.bind(this);
    this.handleClickSendButton = this.handleClickSendButton.bind(this);
  }

  handleInputTextChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleClickSendButton() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(stateDefault);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Input
          label="Título"
          type="text"
          name="title"
          value={ title }
          onChange={ this.handleInputTextChange } />
        <Input
          label="Subtítulo"
          type="text"
          name="subtitle"
          value={ subtitle }
          onChange={ this.handleInputTextChange } />
        <Input
          label="Imagem"
          type="text"
          name="image"
          value={ imagePath }
          onChange={ this.handleInputTextChange } />
        <TextArea
          label="Sinopse"
          name="storyline"
          value={ storyline }
          onChange={ this.handleInputTextChange } />
        <Input
          type="number"
          label="Avaliação"
          name="rating"
          value={ rating }
          onChange={ this.handleInputTextChange }
        />
        <GenreType
          label="Gênero"
          name="genre"
          value={ genre }
          onChange={ this.handleInputTextChange }
          testLabel='genre-input-label'
        />
        <Button onClick={ this.handleClickSendButton } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
};

export default AddMovie;
