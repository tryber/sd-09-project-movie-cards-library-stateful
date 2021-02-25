import React from 'react';
import PropTypes from 'prop-types';

class MovieStoryline extends React.Component {
  render() {
    const { value, changeHandler } = this.props;
    return (
      <label htmlFor="MovieStoryline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyLine"
          value={ value }
          data-testid="storyline-input"
          onChange={ changeHandler }
        />
      </label>
    );
  }
}

MovieStoryline.propTypes = {
  value: PropTypes.string,
  changeHandler: PropTypes.func,
};

MovieStoryline.defaultProps = {
  value: '',
  changeHandler: () => {},
};

export default MovieStoryline;
