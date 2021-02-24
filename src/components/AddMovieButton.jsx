import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovieButton extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <button
        onClick={ onClick }
        type="submit"
        data-testid="send-button"
      >
        Adicionar filme
      </button>
    );
  }
}

AddMovieButton.propTypes = {
  onClick: PropTypes.func,
};

AddMovieButton.defaultProps = {
  onClick: () => 'xablau',
};

export default AddMovieButton;
