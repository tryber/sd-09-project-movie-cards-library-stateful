import React from 'react';
import PropTypes from 'prop-types';

class MovieTitle extends React.Component {
  render() {
    const { value, changeHandler } = this.props;
    return (
      <label htmlFor="MovieTitle" data-testid="title-input-label">
        Título
        <input
          type="text"
          name="title"
          value={ value }
          data-testid="title-input"
          onChange={ changeHandler }
        />
      </label>
    );
  }
}

MovieTitle.propTypes = {
  value: PropTypes.string,
  changeHandler: PropTypes.func,
};

MovieTitle.defaultProps = {
  value: '',
  changeHandler: () => {},
};

export default MovieTitle;
