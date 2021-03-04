import React from 'react';
/* import PropTypes from 'prop-types'; */

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      /* subtitle: '',
      title: ''
      /* imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action', */
    };
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          <input
            data-testid="title-input"
            type="text"
            onChange={ this.setState.title }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
