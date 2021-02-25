import React from 'react';
import PropTypes from 'prop-types';

class ImagePath extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label
        data-testid="image-input-label"
        htmlFor="image-input"
      >
        Image
        <input
          data-testid="image-input"
          name="imagePath"
          type="text"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

ImagePath.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ImagePath;
