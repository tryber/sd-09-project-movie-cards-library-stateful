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

  inputTitleData() {
    const { title } = this.state;

    return {
      dataTestIdLabel: 'title-input-label',
      labelTitle: 'Título',
      id: 'title-input',
      name: 'title',
      type: 'text',
      value: title,
      onChange: this.handleChange,
    };
  }

  inputSubtitleData() {
    const { subtitle } = this.state;

    return {
      dataTestIdLabel: 'subtitle-input-label',
      labelTitle: 'Subtítulo',
      id: 'subtitle-input',
      name: 'subtitle',
      type: 'text',
      value: subtitle,
      onChange: this.handleChange,
    };
  }

  inputImageData() {
    const { imagePath } = this.state;

    return {
      dataTestIdLabel: 'image-input-label',
      labelTitle: 'Imagem',
      id: 'image-input',
      name: 'imagePath',
      type: 'text',
      value: imagePath,
      onChange: this.handleChange,
    };
  }

  inputStorylineData() {
    const { storyline } = this.state;

    return {
      dataTestIdLabel: 'storyline-input-label',
      labelTitle: 'Sinopse',
      id: 'storyline-input',
      name: 'storyline',
      type: 'textarea',
      value: storyline,
      onChange: this.handleChange,
    };
  }

  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <Input input={ this.inputTitleData() } />
        <Input input={ this.inputSubtitleData() } />
        <Input input={ this.inputImageData() } />
        <Input input={ this.inputStorylineData() } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
