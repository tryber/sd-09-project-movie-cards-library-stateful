import React from 'react';
import propTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { title, randomChange } = this.props;
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          type="text"
          name="title"
          value={ title }
          data-testid="title-input"
          itemID="title-input"
          onChange={ randomChange }
        />
      </label>
    );
  }
}
Title.propTypes = {
  title: propTypes.string.isRequired,
  randomChange: propTypes.func.isRequired,
};
export default Title;
