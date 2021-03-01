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
      rating: 0,
      genre: 'action',
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
    const { state, handleInput } = this;
    const { title, subtitle, imagePath, storyline, rating, genre } = state;
    return (
      <form data-testid="add-movie-form">
        <InputText testId="title-input" val={ title } evtFunc={ handleInput } />
        <InputText testId="subtitle-input" val={ subtitle } evtFunc={ handleInput } />
        <InputText testId="image-input" val={ imagePath } evtFunc={ handleInput } />
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            type="text"
            name="storyline"
            id="storyline-input"
            data-testid="storyline-input"
            value={ storyline }
            onChange={ handleInput }
          />
        </label>
        <InputText testId="rating-input" val={ rating } evtFunc={ handleInput } />
        <label htmlFor="genre-select" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            id="genre-select"
            data-testid="genre-input"
            onChange={ handleInput }
            value={ genre }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

// AddMovie.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };

export default AddMovie;
