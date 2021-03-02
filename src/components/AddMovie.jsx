import React from 'react';
import PropTypes from 'prop-types';

const initialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.HandleChange = this.HandleChange.bind(this);
    this.CustomInput = this.CustomInput.bind(this);
    this.TextAreaInput = this.TextAreaInput.bind(this);
    this.SelectInput = this.SelectInput.bind(this);
    this.ResetState = this.ResetState.bind(this);
  }

  HandleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  CustomInput(type, name, value, dataTest) {
    return (
      <input
        type={ type }
        id={ name }
        name={ name }
        value={ value }
        data-testid={ dataTest }
        onChange={ this.HandleChange }
      />
    );
  }

  TextAreaInput(storyline) {
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          id="storyline"
          value={ storyline }
          data-testid="storyline-input"
          name="storyline"
          onChange={ this.HandleChange }
        />
      </label>
    );
  }

  SelectInput(genre) {
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          id="genre"
          name="genre"
          value={ genre }
          data-testid="genre-input"
          onChange={ this.HandleChange }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }

  ResetState() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(initialState);
  }

  render() {
    const {
      title,
      subtitle,
      imagePath,
      rating,
      storyline,
      genre,
    } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          { this.CustomInput('text', 'title', title, 'title-input') }
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          { this.CustomInput('text', 'subtitle', subtitle, 'subtitle-input') }
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          { this.CustomInput('text', 'imagePath', imagePath, 'image-input')}
        </label>
        { this.TextAreaInput(storyline) }
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          { this.CustomInput('number', 'rating', rating, 'rating-input') }
        </label>
        { this.SelectInput(genre) }
        <button
          type="button"
          data-testid="send-button"
          onClick={ () => { this.ResetState(); } }
        >
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
