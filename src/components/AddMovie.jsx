import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from './Input';
import InputNumber from './InputNumber';
import TextArea from './TextArea';
import GenreType from './GenreType';
import Button from './Button';

/* const stateDefault = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
}; */

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    // this.state = stateDefault;
    // console.log(this.state);

    this.handleInputTextChange = this.handleInputTextChange.bind(this);
    this.handleClickSendButton = this.handleClickSendButton.bind(this);
  }

  handleInputTextChange(event) {
    const { name, value } = event.target;
    // console.log(name, value);
    this.setState({
      [name]: value,
    });
  }

  handleClickSendButton() {
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
    // this.setState(stateDefault);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Input
          label="Título"
          name="title"
          value={ title }
          onChange={ this.handleInputTextChange }
          test="title-input"
          testLabel="title-input-label"
        />
        <Input
          label="Subtítulo"
          name="subtitle"
          value={ subtitle }
          onChange={ this.handleInputTextChange }
          test="subtitle-input"
          testLabel="subtitle-input-label"
        />
        <Input
          label="Imagem"
          name="imagePath"
          value={ imagePath }
          onChange={ this.handleInputTextChange }
          test="image-input"
          testLabel="image-input-label"
        />
        <TextArea
          label="Sinopse"
          name="storyline"
          value={ storyline }
          onChange={ this.handleInputTextChange }
        />
        <InputNumber
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
        />
        <Button onClick={ this.handleClickSendButton } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
