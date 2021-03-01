import React from 'react';
import PropTypes from 'prop-types';

class InputText extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
    } = this.props;

    return (
      <label
        data-testid="text-input-label"
        htmlFor="searchText"
      >
        Inclui o texto:
        <input
          name="searchText"
          type="text"
          onChange={ onSearchTextChange }
          value={ searchText }
          data-testid="text-input"
        />
      </label>
    );
  }
}

InputText.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};

export default InputText;
