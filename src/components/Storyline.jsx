import React from 'react';
import propTypes from 'prop-types';

class Storyline extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="storyline-input-label" data-testid="storyline-input-label">
        Sinopse
        <textarea
          type="text"
          value={ value }
          data-testid="storyline-input"
          onChange={ onChange }
          name="storyline"
        />
      </label>
    );
  }
}
Storyline.propTypes = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};
export default Storyline;
