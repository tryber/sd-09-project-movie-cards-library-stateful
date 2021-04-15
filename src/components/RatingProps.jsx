import React from 'react';
import PropTypes from 'prop-types';

class RatingProps extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="movie-card-rating" data-testid="rating">
        <span className="rating">{rating}</span>
      </div>
    );
  }
}

RatingProps.propTypes = { rating: PropTypes.number };

RatingProps.defaultProps = {
  rating: 'undefined',
};

export default RatingProps;
