import React from 'react';
import { func, string } from 'prop-types';

class LabelSubtitle extends React.Component {
  render() {
    const { handleChange, subtitle } = this.props;
    return (
      <>
        <label data-testid="subtitle-input-label" htmlFor="subtitle">
          Subtítulo
          <input
            id="subtitle"
            type="text"
            name="subtitle"
            data-testid="subtitle-input"
            value={ subtitle }
            onChange={ (event) => handleChange(event) }
          />
        </label>
        <br />
      </>
    );
  }
}

LabelSubtitle.propTypes = { handleChange: func.isRequired, subtitle: string.isRequired };

export default LabelSubtitle;
