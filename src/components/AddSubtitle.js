import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddSubtitle extends Component {
  render() {
    const { subtitle, handleChange } = this.props;
    return (
      <div>
        <label
          data-testid="subtitle-input-label"
          htmlFor="id-subtitle"
        >
          Subtítulo
          <div>
            <input
              data-testid="subtitle-input"
              name="subtitle"
              id="id-subtitle"
              type="text"
              value={ subtitle }
              onChange={ handleChange }
            />
          </div>
        </label>
      </div>
    );
  }
}

AddSubtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AddSubtitle;
