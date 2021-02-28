import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.createInput = this.createInput.bind(this);
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

  createInput(labelText, inputType, inputName, inputValue) {
    return (
      <label data-testid={ `${inputName}-input-label` } htmlFor={ inputName }>
        { labelText }
        <input
          data-testid={ `${inputName}-input` }
          type={ inputType }
          value={ inputValue }
          name={ inputName }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        { this.createInput('Título', 'text', 'title', title) }
        { this.createInput('Subtítulo', 'text', 'subtitle', subtitle) }

        <label data-testid="image-input-label" htmlFor="imagePath">
          Imagem
          <input
            data-testid="image-input"
            type="text"
            value={ imagePath }
            name="imagePath"
            onChange={ this.handleChange }
          />
        </label>

        <label data-testid="storyline-input-label" htmlFor="storyline">
          Sinopse
          <textarea
            data-testid="storyline-input"
            value={ storyline }
            name="storyline"
            onChange={ this.handleChange }
          />
        </label>

        { this.createInput('Avaliação', 'number', 'rating', rating) }
        <label data-testid="genre-input-label" htmlFor="genre">
          Gênero
          <select
            data-testid="genre-input"
            onChange={ this.handleChange }
            name="genre"
            value={ genre }>
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button data-testid="send-button" type="button" onClick={ this.handleClick }>
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
