import React, { Component } from 'react';
import PropTypes from 'prop-types';

class New extends Component {
  render() {
    const { name, type, t, val, test } = this.props;
    return (
      <label htmlFor={ name } data-testid={ `${test}-input-label` }>
        { t }
        <input
          type={ type }
          name={ name }
          id={ name }
          defaultValue={ val }
          data-testid={ `${test}-input` }
        />
      </label>
    );
  }
}

New.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  t: PropTypes.string.isRequired,
  val: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  test: PropTypes.string.isRequired,
};

export default New;
