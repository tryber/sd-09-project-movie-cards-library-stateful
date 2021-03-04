import React from 'react';
import PropTypes from 'prop-types';

class Option extends React.Component {
  render() {
    const { properties } = this.props;
    const { description, value, test } = properties;
    return (<option value={ value } data-testid={ test }>{ description }</option>);
  }
}

Option.propTypes = {
  description: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  test: PropTypes.string.isRequired,
};

export default Option;
