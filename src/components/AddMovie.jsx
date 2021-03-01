// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types'

const INITIAL_STATE = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
}

class AddMovie extends Component{

  constructor() {
    super();
    this.state = INITIAL_STATE;
  }

  updateStateValue = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(
      {
        ...this.state,
        [name]: value,
      }
    )
  }

  render() {
    return (
      <div>
        <form data-testid="add-movie-form">
          <label data-testid="title-input-label">
            Título
            <input
              onChange={this.updateStateValue}
              data-testid="title-input"
              value={this.state.title}
              type="text"
              name="title"
              id=""/>
          </label>
        </form>
      </div>
    )
  }
}

AddMovie.protoTypes = {
  onClick: PropTypes.func,
}

export default AddMovie;
