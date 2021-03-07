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
  properties: PropTypes.shape({
    description: PropTypes.string,
    value: PropTypes.string,
    test: PropTypes.string,
  }).isRequired,
};

export default Option;
