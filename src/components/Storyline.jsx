import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Storyline extends Component {
  render() {
    const {
      storyline,
      onChange,
    } = this.props;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          data-testid="storyline-input"
          name="storyline"
          id="storyline-input"
          cols="30"
          rows="4"
          value={ storyline }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Storyline.propTypes = {
  storyline: PropTypes.string,
  onChange: PropTypes.func,
};

Storyline.defaultProps = {
  storyline: '',
  onChange: undefined,
};

export default Storyline;
