import React from 'react';
import PropTypes from 'prop-types';

class TitleForms extends React.Component {
  render() {
    const { title, stateChange } = this.props;

    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          name="title"
          id="title-input"
          type="text"
          value={ title }
          data-testid="title-input"
          onChange={ stateChange }
        />
      </label>
    );
  }
}

TitleForms.propTypes = {
  title: PropTypes.string.isRequired,
  stateChange: PropTypes.func.isRequired,
};

export default TitleForms;
