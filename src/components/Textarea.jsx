import React, { Component } from 'react';
import { string, func } from 'prop-types';

export default class TextArea extends Component {
  render() {
    const { label, name, id, value, onInputChange } = this.props;

    return (
      <label htmlFor={ id } data-testid={ `${id}-label` }>
        { label }
        <textarea
          cols="30"
          rows="10"
          name={ name }
          id={ id }
          data-testid={ id }
          value={ value }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  label: string,
  name: string,
  id: string,
  value: string,
  onInputChange: func,
};

TextArea.defaultProps = {
  label: 'Label for textarea',
  name: 'name-same-as-state',
  id: 'textarea-id',
  value: 'value-for-controlled-textarea',
  onInputChange: () => 'callback for controlled input',
};
