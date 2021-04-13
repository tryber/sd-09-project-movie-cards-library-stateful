import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { title, testid, handleSubmit } = this.props;

    return (
      <div>
        <button
          type="button"
          onClick={ handleSubmit }
          data-testid={ testid }
        >
          {title}
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Button;
