import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      // subtitle: '',
      title: '',
      // imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput({ target }) {
    this.setState({
      title: target.value,
    });
  }

  render() {
    // const {
    //   onClick
    // } = this.props;
    const { title } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            type="text"
            id="title-input"
            data-testid="title-input"
            value={ title }
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
