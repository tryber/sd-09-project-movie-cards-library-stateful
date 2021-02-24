/* eslint-disable max-lines-per-function */
import React from 'react';
import { func } from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      subtitle: '',
      title: '',
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

  render() {
    const { onClick } = this.props;
    return (
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="title" data-testid="title-input-label">
            Título
            <input
              type="text"
              id="title"
              name="title"
              data-testid="title-input"
              value={ this.state.title }
              onChange={ this.handleChange }
            />
          </label>

          <label htmlFor="subtitle" data-testid="subtitle-input-label">
            Subtítulo
            <input
              type="text"
              id="subtitle"
              name="subtitle"
              data-testid="subtitle-input"
              value={ this.state.subtitle }
              onChange={ this.handleChange }
            />
          </label>

          <label htmlFor="imagePath" data-testid="image-input-label">
            Imagem
            <input
              type="text"
              id="imagePath"
              name="imagePath"
              data-testid="image-input"
              value={ this.state.imagePath }
              onChange={ this.handleChange }
            />
          </label>

          <label htmlFor="storyline" data-testid="storyline-input-label">
            Sinopse
            <textarea
              id="storyline"
              name="storyline"
              cols="30"
              rows="10"
              data-testid="storyline-input"
              value={ this.state.storyline }
              onChange={ this.handleChange }
            />
          </label>

          <label htmlFor="rating" data-testid="rating-input-label">
            Avaliação
            <input
              type="number"
              id="rating"
              name="rating"
              data-testid="rating-input"
              value={ this.state.rating }
              onChange={ this.handleChange }
            />
          </label>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: func,
};

export default AddMovie;
