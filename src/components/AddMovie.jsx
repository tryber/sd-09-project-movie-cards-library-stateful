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
    this.setState(() => (
      {
        ...this.state,
        [name]: value,
      }
    ));
  }

  sendInformations(e) {
    const state = this.state
    e.preventDefault();
    this.props.onClick(state);
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
  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <label data-testid="title-input-label" id="inputTitle">
            Título
            <input onChange={ this.updateStateValue } data-testid="title-input"
              value={ title } type="text" name="title" id="inputTitle"/>
          </label>
          <label data-testid="subtitle-input-label" id="inputSubtitle">
            Subtítulo
            <input onChange={ this.updateStateValue } data-testid="subtitle-input"
              value={ subtitle } type="text" name="subtitle" id="inputSubtitle"/>
          </label>
          <label data-testid="image-input-label" id="inputImage">
            Imagem
            <input onChange={ this.updateStateValue } data-testid="image-input"
              value={ imagePath } type="text" name="imagePath" id="inputImage"/>
          </label>
          <label data-testid="storyline-input-label" id="inputSinopse">
            Sinopse
            <textarea onChange={ this.updateStateValue } data-testid="storyline-input"
              value={ storyline } name="storyline" id="inputSinopse" cols="30" rows="10"
            ></textarea>
          </label>
          <label data-testid="rating-input-label" id="inputAvaliacao">
            Avaliação
            <input onChange={ this.updateStateValue } data-testid="rating-input"
              value={ rating } type="number" name="rating" id="inputAvaliacao"/>
          </label>
          <label data-testid="genre-input-label" id="inputGenero">
            Gênero
            <select onChange={ this.updateStateValue } value={ genre }
              data-testid="genre-input" name="genre" id="inputGenero">
                <option data-testid="genre-option" value="action">Ação</option>
                <option data-testid="genre-option" value="comedy">Comédia</option>
                <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
          </label>
          <button type='submit' data-testid="send-button" onClick={this.sendInformations}>
            Adicionar filme
          </button>
        </form>
      </div>
    )
  }
}

AddMovie.protoTypes = {
  onClick: PropTypes.func.isRequired,
}

export default AddMovie;
