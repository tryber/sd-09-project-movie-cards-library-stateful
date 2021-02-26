import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    this.buttonCLick = this.buttonCLick.bind(this);
    this.state = {
      title: '',
      // subtitle: '',
      // imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
  }

  buttonCLick() {
    this.setState({
      title: 'Star Trek: First Contact',
    });
    // console.log(this);
  }

  render() {
    const { title } = this.state;
    const { onSearchTextChange } = this.props;
    // console.log(this.state);
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="text-input">
          Título
          <input
            defaultValue={ title }
            data-testid="title-input"
            onChange={ onSearchTextChange }
          />
        </label>
        <button type="button" onClick={ this.buttonCLick }>Add Movie</button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  // onClick: PropTypes.func.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};

export default AddMovie;
