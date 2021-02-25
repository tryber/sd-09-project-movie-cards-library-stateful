import React from 'react';
import PropTypes from 'prop-types';

class MovieRating extends React.Component {
  render() {
    const { value, changeHandler } = this.props;
    return (
      <label htmlFor="MovieRating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          value={ value }
          data-testid="rating-input"
          onChange={ changeHandler }
        />
      </label>
    );
  }
}

MovieRating.propTypes = {
  value: PropTypes.string,
  changeHandler: PropTypes.func,
};

MovieRating.defaultProps = {
  value: '',
  changeHandler: () => {},
};

export default MovieRating;
