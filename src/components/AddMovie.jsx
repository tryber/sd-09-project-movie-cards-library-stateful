// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from './tags/Input';
import TextArea from './tags/TextArea';
import Select from './tags/Select';
import Option from './tags/Option';
import Button from './tags/Button';

const initialState = {
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

    this.state = initialState;

    this.handleChange = this.handleChange.bind(this);
    this.sendButton = this.sendButton.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  sendButton() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(initialState);
  }

  elementInput() {
    const { title, subtitle, imagePath, rating } = this.state;

    return [
      {
        type: 'text',
        name: 'title',
        text: 'Título',
        value: title,
        callback: this.handleChange,
        dataLabel: 'title-input-label',
        dataInput: 'title-input',
      },
      {
        type: 'text',
        name: 'subtitle',
        text: 'Subtítulo',
        value: subtitle,
        classID: 'subtitle-form',
        callback: this.handleChange,
        dataLabel: 'subtitle-input-label',
        dataInput: 'subtitle-input',
      },
      {
        type: 'text',
        name: 'imagePath',
        text: 'Imagem',
        value: imagePath,
        classID: 'image-form',
        callback: this.handleChange,
        dataLabel: 'image-input-label',
        dataInput: 'image-input',
      },
      {
        type: 'number',
        name: 'rating',
        text: 'Avaliação',
        value: rating,
        classID: 'rating-form',
        min: 0,
        max: 5,
        step: 0.1,
        callback: this.handleChange,
        dataLabel: 'rating-input-label',
        dataInput: 'rating-input',
      },
    ];
  }

  elementTextArea() {
    const { storyline } = this.state;

    return {
      name: 'storyline',
      text: 'Sinopse',
      value: storyline,
      callback: this.handleChange,
      dataLabel: 'storyline-input-label',
      dataInput: 'storyline-input',
    };
  }

  elementSelect() {
    const { genre } = this.state;

    return {
      name: 'genre',
      text: 'Gênero',
      value: genre,
      classID: 'genre-form',
      callback: this.handleChange,
      dataLabel: 'genre-input-label',
      dataInput: 'genre-input',
    };
  }

  elementOptions() {
    return {
      dataOptions: 'genre-option',
      options: {
        action: 'Ação',
        comedy: 'Comédia',
        thriller: 'Suspense',
      },
    };
  }

  elementButton() {
    return {
      name: 'storyline',
      text: 'Adicionar filme',
      data: 'send-button',
      classID: 'send-button',
      callback: this.sendButton,
    };
  }

  render() {
    const dataInput = this.elementInput();

    return (
      <fieldset className="addmovie-fieldset">
        <legend>Adicionar Filme</legend>
        <form data-testid="add-movie-form">
          <Input element={ dataInput[0] } />
          <Input element={ dataInput[1] } />
          <Input element={ dataInput[2] } />
          <TextArea element={ this.elementTextArea() } />
          <Input element={ dataInput[3] } />
          <Select element={ this.elementSelect() }>
            <Option element={ this.elementOptions() } />
          </Select>
          <Button element={ this.elementButton() } />
        </form>
      </fieldset>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
