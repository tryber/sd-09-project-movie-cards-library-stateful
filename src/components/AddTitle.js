import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTitle extends Component {
  render() {
    const { title, handleChange } = this.props;
    return (
      <div>
        <label
          data-testid="title-input-label"
          htmlFor="id-title"
        >
          Título
          <div>
            <input
              data-testid="title-input"
              name="title"
              id="id-title"
              type="text"
              value={ title }
              onChange={ handleChange }
            />
          </div>
        </label>
      </div>
    );
  }
}

AddTitle.propTypes = {
  title: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AddTitle;
