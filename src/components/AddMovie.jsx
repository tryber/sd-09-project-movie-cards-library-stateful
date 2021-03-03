import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './InputElement';
import Select from './SelectElement';
import Option from './OptionElement';

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
    this.initialState = this.state;
    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  onClick() {
    this.setState(this.initialState);
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

  inputRatingData() {
    const { rating } = this.state;

    return {
      dataTestIdLabel: 'rating-input-label',
      labelTitle: 'Avaliação',
      id: 'rating-input',
      name: 'rating',
      type: 'number',
      value: rating,
      onChange: this.handleChange,
    };
  }

  inputGenreData() {
    const { genre } = this.state;

    return {
      dataTestIdLabel: 'genre-input-label',
      labelTitle: 'Gênero',
      id: 'genre-input',
      name: 'genre',
      value: genre,
      onChange: this.handleChange,
    };
  }

  optionData() {
    const dataTestId = 'genre-option';

    return [
      {
        optionValue: 'action',
        optionText: 'Ação',
        dataTestId,
      },
      {
        optionValue: 'comedy',
        optionText: 'Comédia',
        dataTestId,
      },
      {
        optionValue: 'thriller',
        optionText: 'Suspense',
        dataTestId,
      },
    ];
  }

  render() {
    // const { onClick } = this.props;
    return (
      <div>
        <form data-testid="add-movie-form">
          <Input input={ this.inputTitleData() } />
          <Input input={ this.inputSubtitleData() } />
          <Input input={ this.inputImageData() } />
          <Input input={ this.inputStorylineData() } />
          <Input input={ this.inputRatingData() } />
          <Select select={ this.inputGenreData() }>
            { this.optionData().map((currElement) => (
              <Option option={ currElement } key={ currElement.optionValue } />
            ))}
          </Select>
        </form>
        <button type="button" data-testid="send-button" onClick={ this.onClick }>
          Adicionar filme
        </button>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
