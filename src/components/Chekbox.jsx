import React from 'react';
import PropTypes from 'prop-types';

class Checkbox extends React.Component {
  render() {
    const { checked, value, onChange } = this.props;
    return (
      <label htmlFor="bookmark" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          type="checkbox"
          checked={ checked }
          id="bookmark"
          name="bookmark"
          value={ value }
          onChange={ onChange }
          data-testid="checkbox-input"
        />
      </label>
    );
  }
}

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
