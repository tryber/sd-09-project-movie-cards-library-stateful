import React from 'react';
import propTypes from 'prop-types';
// import Inputs from './Inputs';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
    this.updateState2 = this.updateState.bind(this);
  }

  updateState(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { title, subtitle, imagePath } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            type="text"
            value={ title }
            data-testid="title-input"
            onChange={ this.updateState2 }
            name="title"
            itemID="title-input"
          />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ this.updateState2 }
            name="subtitle"
            itemID="subtitle-input"
          />
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            value={ imagePath }
            data-testid="image-input"
            onChange={ this.updateState2 }
            name="imagePath"
            itemID="image-input"
          />
        </label>
      </form>
    );
  }
}
AddMovie.propTypes = {
  subtitle: propTypes.string,
  title: propTypes.string,
  imagePath: propTypes.string,
  storyline: propTypes.string,
  rating: propTypes.number,
  genre: propTypes.string,
}.isRequired;

export default AddMovie;
