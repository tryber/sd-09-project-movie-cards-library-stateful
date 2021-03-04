import React from 'react';
import PropTypes from 'prop-types';
class Option extends React.Component {
  render() {
    const { description, value, test } = this.props.properties;
    return (<option value={ value } data-testid={ test }>{ description }</option>);
  }
}

Option.propTypes = {
  description: PropTypes.string,
  value: PropTypes.string,
  test: PropTypes.string,
};

export default Option;
