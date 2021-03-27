import React from 'react';
import PropTypes from 'prop-types';

class SubtitleForms extends React.Component {
  render() {
    const { subtitle, stateChange } = this.props;

    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          id="subtitle-input"
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ stateChange }
        />
      </label>
    );
  }
}

SubtitleForms.propTypes = {
  subtitle: PropTypes.string.isRequired,
  stateChange: PropTypes.func.isRequired,
};

export default SubtitleForms;
