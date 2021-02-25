import React from 'react';
import PropTypes from 'prop-types';

class ImagePath extends React.Component {
  render() {
    const {

    } = this.props;

    return (
      <label
        data-testid="image-input-label"
        htmlFor=""
      >
        { text }
        <input
          data-testid=""
          name=""
          id=""
          type="text"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

ImagePath.propTypes = {
};

export default ImagePath;
