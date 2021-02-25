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
    rating: 0,
    genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState = {
      [name]: value,
    };
  }

  render() {
    // const { onClick } = this.props;
    const { title } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="inputTitle">
          Título
          <input
            type="text"
            data-testid="title-input"
            name="title"
            id="inputTitle"
            value={ title }
            onChange={ this.handleChange }
          />
        </label>
      </form>
    );
  }
}
