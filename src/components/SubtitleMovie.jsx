import React from 'react';
import { string, func } from 'prop-types';

class SubtilteMovie extends React.Component {
  render() {
    const {
      value,
      handleChange,
    } = this.props;

    return (
      <label htmlFor="subtibleMovie" data-testid="subtitle-input-label">
        <input
          type="text"
          data-testid="subtitle-input"
          placeholder="Subtítulo"
          name="subtitle"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

SubtilteMovie.propTypes = {
  value: string,
  handleChange: func,
};

SubtilteMovie.defaultProps = {
  value: '',
  handleChange: () => {},
};

export default SubtilteMovie;
