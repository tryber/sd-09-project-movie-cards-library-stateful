import React from 'react';
import propTypes from 'prop-types';

class Storyline extends React.Component {
  render() {
    const { storyline, randomChange } = this.props;
    return (
      <label htmlFor="storyLine-input" data-testid="storyline-input-label">
        Sinopse
        <input
          type="text"
          name="storyline"
          value={ storyline }
          data-testid="storyline-input"
          itemID="storyLine-input"
          onChange={ randomChange }
        />
      </label>
    );
  }
}
Storyline.propTypes = {
  storyline: propTypes.string.isRequired,
  randomChange: propTypes.string.isRequired,
};
export default Storyline;
