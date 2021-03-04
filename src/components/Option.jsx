import React from 'react';

class Option extends React.Component {
  render() {
    const { description, value, test } = this.props.optionProperties;
    return (<option value={ value } data-testid={ test }>{ description }</option>);
  }
}

export default Option;
