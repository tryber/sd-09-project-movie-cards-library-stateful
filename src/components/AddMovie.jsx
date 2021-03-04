// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const INITIAL_STATE = {
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
    this.state = INITIAL_STATE;
    this.updateStateValue = this.updateStateValue.bind(this);
    this.sendInformations = this.sendInformations.bind(this);
    this.resetInformations = this.resetInformations.bind(this);
  }

  updateStateValue({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState((prevState) => (
      {
        ...prevState,
        [name]: value,
      }
    ));
  }

  sendInformations(e) {
    const { state } = this.state;
    const { onClick } = this.props;
    e.preventDefault();
    onClick(state);
    this.resetInformations();
  }

  resetInformations() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  inputTextArea() {
    const { storyline } = this.state;
    return (
      <textarea
        onChange={ this.updateStateValue }
        data-testid="storyline-input"
        value={ storyline }
        name="storyline"
        id="inputSinopse"
        cols="30"
        rows="10"
      />
    );
  }

  inputSelect() {
    const { genre } = this.state;
    return (
      <select
        onChange={ this.updateStateValue }
        value={ genre }
        data-testid="genre-input"
        name="genre"
        id="inputGenero"
      >
        <option data-testid="genre-option" value="action">Ação</option>
        <option data-testid="genre-option" value="comedy">Comédia</option>
        <option data-testid="genre-option" value="thriller">Suspense</option>
      </select>
    );
  }

  inputGen(id, name, type, value) {
    return (
      <input
        id={ id }
        name={ name }
        type={ type }
        value={ value }
        data-testid={ name !== 'imagePath' ? `${name}-input` : 'image-input' }
        onChange={ this.updateStateValue }
      />
    );
  }

  render() {
    const { title, subtitle, imagePath, rating } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <label data-testid="title-input-label" htmlFor="inputTitle">
            Título
            { this.inputGen('inputTitle', 'title', 'text', title, 'title-input') }
          </label>
          <label data-testid="subtitle-input-label" htmlFor="inputSubtitle">
            Subtítulo
            { this.inputGen('inputSubtitle', 'subtitle',
              'text', subtitle, 'subtitle-input') }
          </label>
          <label data-testid="image-input-label" htmlFor="inputImage">
            Imagem
            { this.inputGen('inputImage', 'imagePath',
              'text', imagePath, 'image-input') }
          </label>
          <label data-testid="storyline-input-label" htmlFor="inputSinopse">
            Sinopse
            { this.inputTextArea() }
          </label>
          <label data-testid="rating-input-label" htmlFor="inputAvaliacao">
            Avaliação
            { this.inputGen('inputAvaliacao', 'rating',
              'number', rating, 'rating-input') }
          </label>
          <label data-testid="genre-input-label" htmlFor="inputGenero">
            Gênero
            { this.inputSelect() }
          </label>
          <button
            type="submit"
            data-testid="send-button"
            onClick={ this.sendInformations }
          >
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
