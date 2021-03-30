import React, { Component } from 'react';
import { func } from 'prop-types';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.createForms = this.createForms.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
      options: {
        action: 'Ação',
        comedy: 'Comédia',
        thriller: 'Suspense',
      },
    };
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleClick() {
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

  createForms(target) {
    const [inputLabel, inputName, inputValue, inputType, inputTrueStateName] = target;
    const CustomTag = inputValue !== 'storyline' ? 'input' : 'textarea';

    return (
      <label data-testid={ `${inputName}-input-label` } htmlFor={ inputName }>
        { inputLabel }
        <CustomTag
          type={ inputType }
          value={ inputValue }
          name={ inputTrueStateName }
          onChange={ this.handleChange }
          data-testid={ `${inputName}-input` }
        />
      </label>
    );
  }

  createFormsOptions(target) {
    const [inputLabel, inputName, inputValue] = target;
    const { options } = this.state;
    const optionsObject = Object.keys(options);
    return (
      <label data-testid="genre-input-label" htmlFor={ inputName }>
        { inputLabel }
        <select
          name={ inputName }
          value={ inputValue }
          data-testid="genre-input"
          onChange={ this.handleChange }
        >
          {
            optionsObject.map((key) => (
              <option
                key={ key }
                value={ key }
                data-testid="genre-option"
              >
                { options[key] }
              </option>
            ))
          }
        </select>
      </label>
    );
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">

        { this.createForms(['Título', 'title', title, 'text', 'title']) }
        { this.createForms(['Subtítulo', 'subtitle', subtitle, 'text', 'subtitle']) }
        { this.createForms(['Imagem', 'image', imagePath, 'text', 'imagePath']) }
        { this.createForms(['Sinopse', 'storyline', storyline, 'text', 'storyline']) }
        { this.createForms(['Avaliação', 'rating', rating, 'number', 'rating']) }
        { this.createFormsOptions(['Gênero', 'genre', genre, 'text', 'genre']) }

        <button
          type="button"
          data-testid="send-button"
          onClick={ this.handleClick }
        >
          Adicionar filme
        </button>

      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: func.isRequired,
};

export default AddMovie;
