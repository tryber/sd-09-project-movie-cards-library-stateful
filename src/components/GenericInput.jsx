import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';
import TextArea from './TextArea';

const getInput = {
  for(props) {
    const { type } = props;
    return this[type](props);
  },
  text: TextInput,
  number: TextInput,
  textarea: TextArea,
};

export default class GenericInput extends Component {
  render() {
    const {
      label,
      name,
      id,
    } = this.props;

    return (
      <label htmlFor={ name } data-testid={ `${id}-input-label` }>
        { label }
        { getInput.for(this.props) }
      </label>
    );
  }
}

GenericInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
