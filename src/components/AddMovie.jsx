import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
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
    this.setState({
      [name]: value,
    });
  }

  createInput(label, name, type, value) {
    return (
      <label data-testid={ `${name}-input-label` } htmlFor={ `${name}-input` }>
        { label }
        <input
          data-testid={ `${name}-input` }
          type={ type }
          name={ `${value}` }
          id={ `${name}-input` }
          value={ value }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        { this.createInput(Título, 'title', 'text', title) }
        { this.createInput(Subtítulo, 'subtitle', 'text', subtitle) }
        { this.createInput(Imagem, 'image', 'text', imagePath) }
        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          Sinopse
          <textarea
            data-testid="storyline-input"
            name="storyline"
            id="storyline-input"
            value={ storyline }
            onChange={ this.handleChange }
          />
        </label>
        { this.createInput(Avaliação, 'rating', 'number', rating) }
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
