import React from 'react';
import { string, func } from 'prop-types';

class LabelSinopse extends React.Component {
  render() {
    const { storyLine, handleChange } = this.props;
    return (
      <>
        <label data-testid="storyline-input-label" htmlFor="storyLine">
          Sinopse
          <textarea
            id="storyLine"
            value={ storyLine }
            name="storyLine"
            data-testid="storyline-input"
            onChange={ handleChange }
          />
        </label>
        <br />
      </>
    );
  }
}

LabelSinopse.propTypes = { storyLine: string.isRequired, handleChange: func.isRequired };
export default LabelSinopse;
