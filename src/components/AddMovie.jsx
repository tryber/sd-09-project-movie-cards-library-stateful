import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ParentInput from './ParentInput';
import ParentSelect from './ParentSelect';

const INITIAL_STATE = {
  title: '',
  subtitle: '',
  storyline: '',
  rating: 0,
  imagePath: '',
  genre: 'action',
};
class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
    this.handleChange = this.handleChange.bind(this);
    this.setup = this.setup.bind(this);
  }

  handleChange({ target }) {
    let { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    if (name === 'image') name = 'imagePath';
    this.setState({
      [name]: value,
    });
  }

  setup(evt) {
    let { rating } = this.state;
    rating = parseFloat(rating);
    const { onClick } = this.props;
    evt.preventDefault();
    if (!Number.isNaN(rating)) {
      onClick(this.state);
      this.setState(INITIAL_STATE);
    }
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <ParentInput
          type="text"
          name="title"
          value={ title }
          lblTitle="Título"
          handleChange={ this.handleChange }
        />
        <ParentInput
          type="text"
          name="subtitle"
          value={ subtitle }
          lblTitle="Subtítulo"
          handleChange={ this.handleChange }
        />
        <ParentInput
          type="text"
          name="image"
          value={ imagePath }
          lblTitle="Imagem"
          handleChange={ this.handleChange }
        />
        <label data-testid="storyline-input-label" htmlFor="storyLineInput">
          Sinopse
          <textarea
            data-testid="storyline-input"
            id="storyLineInput"
            name="storyline"
            value={ storyline }
            onChange={ this.handleChange }
          />
        </label>
        <ParentInput
          type="number"
          name="rating"
          value={ rating }
          lblTitle="Avaliação"
          handleChange={ this.handleChange }
        />
        <ParentSelect value={ genre } handleChange={ this.handleChange } />
        <button data-testid="send-button" type="submit" onClick={ this.setup }>
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
