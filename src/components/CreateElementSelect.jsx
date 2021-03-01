import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { value, func } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="genre">
        Gênero
        <select
          id="genre"
          name="genre"
          value={value}
          data-testid="genre-input"
          onChange={func}
        >
          <option data-testid="genre-option" value="action">
            Ação
          </option>
          <option data-testid="genre-option" value="comedy">
            Comédia
          </option>
          <option data-testid="genre-option" value="thriller">
            Suspense
          </option>
        </select>
      </label>
    );
  }
}

Select.defaultProps = {
  value: PropTypes.oneOf(['string', 'number']),
  func: PropTypes.func,
}

Select.propTypes = {
  value: PropTypes.oneOf(['string', 'number']),
  func: PropTypes.func,
};

export default Select;
