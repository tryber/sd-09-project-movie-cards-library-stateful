import React from 'react';
import PropTypes from 'prop-types';

class MovieImagePath extends React.Component {
  render() {
    const { value, changeHandler } = this.props;
    return (
      <label htmlFor="MovieImagePath" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          name="imagePath"
          value={ value }
          data-testid="image-input"
          onChange={ changeHandler }
        />
      </label>
    );
  }
}

MovieImagePath.propTypes = {
  value: PropTypes.string,
  changeHandler: PropTypes.func,
};

MovieImagePath.defaultProps = {
  value: '',
  changeHandler: () => {},
};

export default MovieImagePath;
