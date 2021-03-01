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

  constructor() {
    super();
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
        </form>
      </div>
    )
  }
}

AddMovie.protoTypes = {
  onClick: PropTypes.func,
}

export default AddMovie;
