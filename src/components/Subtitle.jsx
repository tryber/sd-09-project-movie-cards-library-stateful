import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Subtitle extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          itemID="subtitle"
          type="text"
          name="subtitle"
          data-testid="subtitle-input"
          onChange={ handleChange }
          value={ value }
        />
      </label>
    );
  }
}

const { string, func } = PropTypes;
Subtitle.propTypes = {
  value: string.isRequired,
  handleChange: func.isRequired,
};

export default Subtitle;
