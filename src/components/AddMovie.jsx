import React from 'react';
import { func } from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.createInput = this.createInput.bind(this);
    this.createTextArea = this.createTextArea.bind(this);
    this.createSelect = this.createSelect.bind(this);
    this.setStateInitialValue = this.setStateInitialValue.bind(this);

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  setStateInitialValue() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  createSelect(genre) {
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          id="genre"
          name="genre"
          data-testid="genre-input"
          value={ genre }
          onChange={ this.handleChange }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }

  createTextArea(storyline) {
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          id="storyline"
          name="storyline"
          cols="30"
          rows="10"
          data-testid="storyline-input"
          value={ storyline }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  createInput(stateKey, labelText, type, value) {
    const inputName = stateKey === 'image' ? 'imagePath' : stateKey;
    return (
      <label htmlFor={ stateKey } data-testid={ `${stateKey}-input-label` }>
        { labelText }
        <input
          type={ type }
          id={ stateKey }
          name={ inputName }
          data-testid={ `${stateKey}-input` }
          value={ value }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          { this.createInput('title', 'Título', 'text', title) }
          { this.createInput('subtitle', 'Subtítulo', 'text', subtitle) }
          { this.createInput('image', 'Imagem', 'text', imagePath) }
          { this.createTextArea(storyline) }
          { this.createInput('rating', 'Avaliação', 'number', rating) }
          { this.createSelect(genre) }
          <button
            type="button"
            data-testid="send-button"
            onClick={ this.setStateInitialValue }
          >
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: func.isRequired,
};

export default AddMovie;
