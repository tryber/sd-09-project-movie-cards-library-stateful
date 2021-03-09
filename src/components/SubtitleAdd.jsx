import React from 'react';
import Proptypes from 'prop-types';

class SubtitleAdd extends React.Component {
  render() {
    const { subtitle, handleChange} = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
      Subtítulo
        <input
          type="text"
          name="subtitle"
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

SubtitleAdd.propTypes = {
  subtitle: Proptypes.string.isRequired,
  handleChange: Proptypes.func.isRequired
};

export default SubtitleAdd
