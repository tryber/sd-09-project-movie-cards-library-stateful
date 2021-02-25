import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Gender extends Component {
  render() {
    const {
      genre,
      onChange,
    } = this.props;
    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          data-testid="genre-input"
          id="genre-input"
          value={ genre }
          onChange={ onChange }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

Gender.propTypes = {
  genre: PropTypes.string,
  onChange: PropTypes.func,
};

Gender.defaultProps = {
  genre: 'action',
  onChange: null,
};

export default Gender;
