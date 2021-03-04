import React from 'react';
import PropTypes from 'prop-types';

class TitleLabel extends React.Component {
  render() {
    const { title, changeStateValue } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="title">
        Título
        <input
          id="title"
          data-testid="title-input"
          type="text"
          value={ title }
          onChange={ changeStateValue }
        />
      </label>
    );
  }
}

TitleLabel.propTypes = {
  title: PropTypes.string.isRequired,
  changeStateValue: PropTypes.func.isRequired,
};

export default TitleLabel;
