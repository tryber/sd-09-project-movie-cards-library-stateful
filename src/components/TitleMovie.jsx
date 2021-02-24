import React from 'react';
import { string, func } from 'prop-types';

class TitleMovie extends React.Component {
  render() {
    const {
      value,
      handleChange,
    } = this.props;

    return (
      <label htmlFor="titleMovie" data-testid="title-input-label">
        Título
        <input
          type="text"
          data-testid="title-input"
          name="title"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

TitleMovie.propTypes = {
  value: string,
  handleChange: func,
};

TitleMovie.defaultProps = {
  value: '',
  handleChange: () => {},
};

export default TitleMovie;
