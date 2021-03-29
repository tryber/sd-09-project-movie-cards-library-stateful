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
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
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

  createForms(inputLabel, inputType, inputName, inputValue) {
    const options = { action: 'Ação', comedy: 'Comédia', thriller: 'Suspense' };
    const CustomTag = inputValue !== 'storyline' ? 'input' : 'textarea';
    if (inputValue !== 'genre') {
      return (
        <label data-testid={ `${inputName}-input-label` } htmlFor={ inputName }>
          { inputLabel }
          <CustomTag
            data-testid={ `${inputName}-input` }
            type={ inputType }
            value={ inputValue }
            name={ inputName }
            onChange={ this.handleChange }
          />
        </label>);
    }

    return (
      <label data-testid={ `${inputName}-input-label` } htmlFor={ inputName }>
        { inputLabel }
        <select>
          { Object.keys(options).map((key) => (
            <option key="" data-testid={ `${inputName}-option` } value={ options[key] }>
              { options[key] }
            </option>)) }
        </select>
      </label>);
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        { this.createForms('Título', 'text', 'title', title) }
        { this.createForms('Subtítulo', 'text', 'subtitle', subtitle) }
        { this.createForms('Imagem', 'text', 'image', imagePath) }
        { this.createForms('Sinopse', 'text', 'storyline', storyline) }
        { this.createForms('Avaliação', 'number', 'rating', rating) }
        { this.createForms('Gênero', 'text', 'genre', genre) }
        <button
          type="button"
          onClick={ this.handleClick }
          data-testid="send-button"
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
