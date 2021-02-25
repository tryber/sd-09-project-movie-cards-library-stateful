import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action'
    };
    this.setTitleValue = this.setTitleValue.bind(this);
  }

  setTitleValue(e) {
    this.setState({ title: e.target.value });
  }

  render() {
    const { onClick } = this.props;

    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          <input
            id="title-input"
            type="text"
            value={ this.state.title }
            data-testid="title-input"
            onChange={ this.setTitleValue }
          />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
