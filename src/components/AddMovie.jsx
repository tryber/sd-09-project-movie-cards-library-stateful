import React, { Component } from 'react';
import InputText from './InputText';
// import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      // rating: 0,
      // genre: 'action',
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    // const {
    //   onClick
    // } = this.props;
    const { title, subtitle, imagePath, storyline } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputText
          labelTesId="title-input-label"
          inputLabel="Título"
          inputTestId="title-input"
          stateValue={ title }
          onChangeFunc={ this.handleInput }
        />
        <InputText
          labelTesId="subtitle-input-label"
          inputLabel="Subtítulo"
          inputTestId="subtitle-input"
          stateValue={ subtitle }
          onChangeFunc={ this.handleInput }
        />
        <InputText
          labelTesId="image-input-label"
          inputLabel="Imagem"
          inputTestId="image-input"
          stateValue={ imagePath }
          onChangeFunc={ this.handleInput }
        />
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            type="text"
            name="storyline"
            id="storyline-input"
            data-testid="storyline-input"
            value={ storyline }
            onChange={ this.handleInput }
          />
        </label>
      </form>
    );
  }
}

// AddMovie.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };

export default AddMovie;
