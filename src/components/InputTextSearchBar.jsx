import React from 'react';

class InputText extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
    } = this.props;

    return (
      <label
        data-testid="text-input-label"
        htmlFor="inputSearch"
      >
        Inclui o texto:
        <input
          id="inputSearch"
          type="text"
          onChange={ onSearchTextChange }
          value={ searchText }
          data-testid="text-input"
        />
      </label>
    );
  }
}

export default InputText;
