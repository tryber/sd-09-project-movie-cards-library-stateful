import React from 'react';
import propTypes from 'prop-types';

class TitleInput extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          type="text"
          name="title"
          value={ value }
          data-testid="title-input"
          itemID="title-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}
TitleInput.propTypes = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};
export default TitleInput;
