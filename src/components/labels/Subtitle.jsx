import React from 'react';
import propTypes from 'prop-types';

class Subtitle extends React.Component {
  render() {
    const { subtitle, randomChange } = this.props;
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          value={ subtitle }
          data-testid="subtitle-input"
          itemID="subtitle-input"
          onChange={ randomChange }
        />
      </label>
    );
  }
}
Subtitle.propTypes = {
  subtitle: propTypes.string.isRequired,
  randomChange: propTypes.func.isRequired,
};

export default Subtitle;
