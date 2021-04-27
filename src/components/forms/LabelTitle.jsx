import React from 'react';
import { func, string } from 'prop-types';

class LabelTitle extends React.Component {
  render() {
    const { handleChange, title } = this.props;
    return (
      <>
        <label data-testid="title-input-label" htmlFor="title">
          Título
          <input
            id="title"
            type="text"
            name="title"
            data-testid="title-input"
            value={ title }
            onChange={ (event) => handleChange(event) }
          />
        </label>
        <br />
      </>
    );
  }
}

LabelTitle.propTypes = { handleChange: func.isRequired, title: string.isRequired };

export default LabelTitle;
