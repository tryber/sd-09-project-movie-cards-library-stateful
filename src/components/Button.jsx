import React from 'react';

class Button extends React.Component {
  render() {
    const { value, test, onClick } = this.props;
    return (
      <button
        type="button"
        onClick={onClick}
        data-testid={ test }
      >
        {value}
      </button>
    );
  }
}

export default Button;
