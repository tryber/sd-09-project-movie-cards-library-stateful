import React from 'react';

import PropTypes from 'prop-types';

class MovieSubtitle extends React.Component {
  render() {
    const { value, changeHandler } = this.props;
    return (
      <label htmlFor="MovieSubtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          value={ value }
          data-testid="subtitle-input"
          onChange={ changeHandler }
        />
      </label>
    );
  }
}

MovieSubtitle.propTypes = {
  value: PropTypes.string,
  changeHandler: PropTypes.func,
};

MovieSubtitle.defaultProps = {
  value: '',
  changeHandler: () => {},
};

export default MovieSubtitle;
