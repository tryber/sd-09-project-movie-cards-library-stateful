import React, { Component } from 'react';
import PropTypes from 'prop-types';

// fonte 1: https://stackoverflow.com/questions/34845650/clearing-state-es6-react
// fonte 2: https://medium.com/@justintulk/best-practices-for-resetting-an-es6-react-components-state-81c0c86df98d
const initialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends Component {
  constructor() {
    super();

    this.state = initialState;

    // this.state = {
    //   subtitle: '',
    //   title: '',
    //   imagePath: '',
    //   storyline: '',
    //   rating: 0,
    //   genre: 'action',
    // };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(initialState);
  }

  createTextInput(label, name, testid, handler) {
    const { [name]: stateName } = this.state;
    return (
      <label htmlFor={ `${testid}-input` } data-testid={ `${testid}-input-label` }>
        { label }
        <input
          type="text"
          id={ `${testid}-input` }
          name={ name }
          value={ stateName }
          onChange={ handler }
          data-testid={ `${testid}-input` }
        />
      </label>
    );
  }

  render() {
    const { storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        { this.createTextInput('Título', 'title', 'title', this.handleChange) }
        { this.createTextInput('Subtítulo', 'subtitle', 'subtitle', this.handleChange) }
        { this.createTextInput('Imagem', 'imagePath', 'image', this.handleChange) }
        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          Sinopse
          <textarea
            type="text"
            name="storyline"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ this.handleChange }
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="rating-input">
          Avaliação
          <input
            type="number"
            name="rating"
            value={ rating }
            data-testid="rating-input"
            onChange={ this.handleChange }
          />
        </label>
        <label data-testid="genre-input-label" htmlFor="genre-input">
          Gênero
          <select
            type="text"
            name="genre"
            value={ genre }
            data-testid="genre-input"
            onChange={ this.handleChange }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button type="button" data-testid="send-button" onClick={ this.handleClick }>
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
