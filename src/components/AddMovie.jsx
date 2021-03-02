import React from 'react';
import { func } from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleInput = this.handleInput.bind(this);
    this.createTextInput = this.createTextInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInput(event) {
    const { target: { name, value } } = event;
    this.setState({ [name]: value });
  }

  handleClick() {
    const { props: { onClick } } = this;
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
      <form action="" data-testid="add-movie-form">
        { this.createTextInput('Título', 'title', 'title', this.handleInput) }
        { this.createTextInput('Subtítulo', 'subtitle', 'subtitle', this.handleInput) }
        { this.createTextInput('Imagem', 'imagePath', 'image', this.handleInput) }
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            id="storyline-input"
            name="storyline"
            value={ storyline }
            onChange={ this.handleInput }
            data-testid="storyline-input"
          />
        </label>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            id="rating-input"
            name="rating"
            value={ rating }
            onChange={ this.handleInput }
            data-testid="rating-input"
          />
        </label>
        <label htmlFor="genre-input" data-testid="genre-input-label">
          Gênero
          <select
            id="genre-input"
            name="genre"
            value={ genre }
            data-testid="genre-input"
            onChange={ this.handleInput }
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
  onClick: func.isRequired,
};

export default AddMovie;
