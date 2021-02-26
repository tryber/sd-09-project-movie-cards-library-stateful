import React from 'react';
import PropTypes from 'prop-types';
import HandleInputs from './Inputs/HandleInputs';
import './Styles/AddMovie.css';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      subtitle: '',
      storyline: '',
      imagePath: '',
      // genre: 'action',
      // rating: 0,
    };

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleClick(e) {
    return console.log(e);
  }

  handleOnChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  render() {
    const { title, subtitle, imagePath, storyline } = this.state;
    return (
      <form data-testid="add-movie-form" className="form">
        <HandleInputs
          labelValue="Título"
          dataTestid="title-input-label"
          name="title"
          htmlFor="input-title"
          value={ title }
          handleOnChange={ this.handleOnChange }
        />
        <HandleInputs
          labelValue="Subtítulo"
          dataTestid="subtitle-input-label"
          name="subtitle"
          htmlFor="input-subtitle"
          value={ subtitle }
          handleOnChange={ this.handleOnChange }
        />
        <label
          data-testid="image-input-label"
          subtitle={ subtitle }
          htmlFor="input-subtitle"
          value={ imagePath }
        >
          Imagem
          <input
            data-testid="image-input"
            onChange={ this.handleOnChange }
            id="input-subtitle"
            name="imagePath"
          />
        </label>
        <label htmlFor="input-storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            onChange={ this.handleOnChange }
            id="input-storyline"
            value={ storyline }
            data-testid="storyline-input"
          />
        </label>
      </form>
    );
  }
}

PropTypes.shape({
  title: 'string',
  subtitle: 'string',
  storyline: 'string',
  imagePath: 'string',
  // genre: 'action',
  // rating: 0,
});

export default AddMovie;
