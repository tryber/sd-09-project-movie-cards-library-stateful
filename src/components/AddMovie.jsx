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
      // rating: 0,
      // genere: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor data-testid="title-input-label">
          Título
          <input
            name="title"
            onClick={ onClick }
            onChange={ this.handleChange }
            data-testid="title-input"
            value={ title }
          />
        </label>
        <label htmlFor data-testid="subtitle-input-label">
          Subtítulo
          <input
            name="subtitle"
            onClick={ onClick }
            onChange={ this.handleChange }
            data-testid="subtitle-input"
            value={ subtitle }
          />
        </label>
        <label htmlFor data-testid="image-input-label">
          Imagem
          <input
            name="imagePath"
            onClick={ onClick }
            onChange={ this.handleChange }
            data-testid="image-input"
            value={ imagePath }
          />
        </label>
        <label htmlFor data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            onClick={ onClick }
            onChange={ this.handleChange }
            data-testid="storyline-input"
            value={ storyline }
          />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
