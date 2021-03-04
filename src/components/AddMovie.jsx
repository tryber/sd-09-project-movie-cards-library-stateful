import React, { Component } from 'react';

import Input from './Input';
import TextArea from './TextArea';
import GenreType from './GenreType';
import Button from './Button';

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

    this.handleInputTextChange = this.handleInputTextChange.bind(this);
    this.handleClickSendButton = this.handleClickSendButton.bind(this);
  }

  handleInputTextChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleClickSendButton() {}

  render() {
    // const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Input
          label='Título'
          type='text'
          name='title'
          value={ title }
          onChange={ this.handleInputTextChange }
          testLabel='title-input-label'
          test='title-input'
        />
        <Input
          label='Subtítulo'
          type='text'
          name='subtitle'
          value={ subtitle }
          onChange={ this.handleInputTextChange }
          testLabel='subtitle-input-label'
          test='subtitle-input'
        />
        <Input
          type='text'
          label='Imagem'
          name='img'
          value={ imagePath }
          onChange={ this.handleInputTextChange }
          testLabel='image-input-label'
          test='image-input'
        />
        <TextArea
          label='Sinopse'
          name='storyline'
          value={ storyline }
          onChange={ this.handleInputTextChange }
        />
        <Input
          type='number'
          label='Avaliação'
          name='rating'
          value={ rating }
          onChange={ this.handleInputTextChange }
          testLabel='rating-input-label'
          test='rating-input'
        />
        <GenreType
          label='Gênero'
          name='genre'
          value={ genre }
          onChange={ this.handleInputTextChange }
          testLabel='genre-input-label'
          test='genre-input'
          testOption='genre-option'
        />
        <Button
          value='Adicionar filme'
          test='send-button'
          onClick={this.handleClickSendButton}
        />
      </form>
    );
  }
}

export default AddMovie;
