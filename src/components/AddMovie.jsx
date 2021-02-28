/* eslint-disable max-lines-per-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

    this.handleChange = this.handleChange.bind(this);
    this.buttonCliked = this.buttonCliked.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  buttonCliked() {
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

  render() {
    const {
      title,
      subtitle,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;

    return (
      <form data-testid="add-movie-form">
        <div>
          <label data-testid="title-input-label">Título</label>
        </div>
        <div>
          <input
            data-testid="title-input"
            name="title"
            type="text"
            value={ title }
            onChange={ this.handleChange }
          />
        </div>
        <div>
          <label data-testid="subtitle-input-label">Subtítulo</label>
        </div>
        <div>
          <input
            data-testid="subtitle-input"
            name="subtitle"
            type="text"
            value={ subtitle }
            onChange={ this.handleChange }
          />
        </div>
        <div>
          <label data-testid="image-input-label">Imagem</label>
        </div>
        <div>
          <input
            data-testid="image-input"
            name="imagePath"
            type="text"
            value={ imagePath }
            onChange={ this.handleChange }
          />
        </div>
        <div>
          <label data-testid="storyline-input-label">Sinopse</label>
        </div>
        <div>
          <textarea
            data-testid="storyline-input"
            name="storyline"
            value={ storyline }
            onChange={ this.handleChange }
          />
        </div>
        <div>
          <label data-testid="rating-input-label">Avaliação</label>
        </div>
        <div>
          <input 
            data-testid="rating-input"
            name="rating"
            type="number"
            value={ rating }
            onChange={ this.handleChange }
          />
        </div>
        <div>
          <label data-testid="genre-input-label">Gênero</label>
        </div>
        <div>
          <select
            data-testid="genre-input"
            name="genre"
            value={ genre }
            onChange={ this.handleChange }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </div>
        <button data-testid="send-button" onClick={ this.buttonCliked }>Adicionar filme</button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  handleChange: PropTypes.func,
};

export default AddMovie;
