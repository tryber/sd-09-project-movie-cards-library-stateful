import React from 'react';
import PropTypes from 'prop-types';

class Option extends React.Component {
  render() {
    const { element } = this.props;

    const {
      dataOptions,
      options,
    } = element;

    return (
      Object.entries(options).map(([key, valueOption]) => (
        <option key={ key } data-testid={ dataOptions } value={ key }>
          { valueOption }
        </option>
      ))
    );
  }
}

Option.propTypes = {
  element: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Option;
