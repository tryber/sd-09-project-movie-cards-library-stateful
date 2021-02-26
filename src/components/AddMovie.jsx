import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ParentInput from './ParentInput';
import ParentSelect from './ParentSelect';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      imagePath: '',
      genre: 'action',
    };
    this.baseState = this.state;
    this.handleChange = this.handleChange.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  handleChange({ target }) {
    let { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    if (name === 'image') name = 'imagePath';
    this.setState({
      [name]: value,
    });
  }

  resetState(evt) {
    evt.preventDefault();
    this.setState(this.baseState);
  }

  render() {
    const { onClick } = this.props;
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
        <button data-testid="send-button" type="submit" onClick={ onClick(this.state) } onMouseDown={ this.resetState }>
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
