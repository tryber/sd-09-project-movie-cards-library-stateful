// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types'

const INITIAL_STATE = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
}

class AddMovie extends Component{

  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  updateStateValue = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(
      {
        ...this.state,
        [name]: value,
      }
    )
  }

  sendInformations = (e) => {
    e.preventDefault();
    this.props.onClick(this.state);
    this.resetInformations();
  }

  resetInformations = () => {
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
    return (
      <div>
        <form data-testid="add-movie-form">
          <label data-testid="title-input-label">
            Título
            <input
              onChange={ this.updateStateValue }
              data-testid="title-input"
              value={ this.state.title }
              type="text"
              name="title"
              id=""/>
          </label>
          <label data-testid="subtitle-input-label">
            Subtítulo
            <input
              onChange={ this.updateStateValue }
              data-testid="subtitle-input"
              value={this.state.subtitle}
              type="text"
              name="subtitle"
              id=""/>
          </label>
          <label data-testid="image-input-label">
            Imagem
            <input
              onChange={ this.updateStateValue }
              data-testid="image-input"
              value={ this.state.imagePath }
              type="text"
              name="imagePath"
              id=""/>
          </label>
          <label data-testid="storyline-input-label">
            Sinopse
            <textarea
              onChange={ this.updateStateValue }
              data-testid="storyline-input"
              value={ this.state.storyline }
              name="storyline"
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </label>
          <label data-testid="rating-input-label">
            Avaliação
            <input
              onChange={ this.updateStateValue }
              data-testid="rating-input"
              value={ this.state.rating }
              type="number"
              name="rating"
              id=""/>
          </label>
          <label data-testid="genre-input-label">
            Gênero
            <select
              onChange={ this.updateStateValue }
              value={ this.state.genre }
              data-testid="genre-input"
              name="genre">
                <option data-testid="genre-option" value="action">Ação</option>
                <option data-testid="genre-option" value="comedy">Comédia</option>
                <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
          </label>
          <button
            type='submit'
            data-testid="send-button"
            onClick={this.sendInformations}>
            Adicionar filme
          </button>
        </form>
      </div>
    )
  }
}

AddMovie.protoTypes = {
  onClick: PropTypes.func,
}

export default AddMovie;
