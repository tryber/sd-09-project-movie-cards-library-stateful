import React from 'react';
import { string, func } from 'prop-types';

class StorylineMovie extends React.Component {
  render() {
    const {
      value,
      handleChange,
    } = this.props;

    return (
      <label htmlFor="storylineMovie" data-testid="storyline-input-label">
        <textarea
          type="text"
          id="storylineMovie"
          placeholder="Sinopse"
          data-testid="storyline-input"
          name="storyline"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

StorylineMovie.propTypes = {
  value: string,
  handleChange: func,
};

StorylineMovie.defaultProps = {
  value: '',
  handleChange: () => {},
};

export default StorylineMovie;
