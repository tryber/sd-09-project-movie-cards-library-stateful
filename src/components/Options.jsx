import React from 'react';
import PropTypes from 'prop-types';

class Options extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          id="genre"
          data-testid="genre-input"
          name="genre"
          value={ value }
          onChange={ handleChange }
        >
          <option data-testid="genre-option" value="action"> Ação</option>
          <option data-testid="genre-option" value="comedy"> Comédia</option>
          <option data-testid="genre-option" value="thriller"> Suspense</option>
        </select>
      </label>
    );
  }
}
Options.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default Options;
