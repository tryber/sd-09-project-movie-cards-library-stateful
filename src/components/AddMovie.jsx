import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import RenderStates from './RenderStates';

export default class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.clearInputs = this.clearInputs.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  clearInputs() {
    const { onClick } = this.props;
    onClick();
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <RenderStates
          title={ title }
          callback={ this.handleChange }
          subtitle={ subtitle }
          imagePath={ imagePath }
          rating={ rating }
          storyline={ storyline }
          genre={ genre }
        />
        <button
          onClick={ this.clearInputs }
          type="button"
          data-testid="send-button"
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
